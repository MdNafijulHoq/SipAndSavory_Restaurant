import React, { useContext, useEffect, useState } from 'react';
import login from '../../assets/others/authentication2.png'
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import { Link, replace, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form"
import useAxiosPublic from '../../CustomHooks/useAxiosPublic';
const Login = () => {

    const {user, loading, setUser, signIn, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();
    

    const from = location.state?.from?.pathname || "/";

    const [showPassword, setShowPassword] = useState(false);
    const [disable, setDisable] = useState(true);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Formik
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        console.log(data)
        try{
            const result = await signIn(data.email, data.password)
            console.log(result)
            toast.success("Login Successfull!")
            navigate(from,{ replace: true})
        }
        catch(error){
            console.log(error)
            toast.error(error?.message)
        }
      }

    // For captcha
    useEffect(() => {
        loadCaptchaEnginge(6); 
    },[])

    const handleChaptcha = (e) => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }
   
        else {
            setDisable(true)
        }
    }

    // Google SignIn
    const handleGoogleSignIn = async() => {
        try{
            await signInWithGoogle()
            console.log(user.email, user.displayName)
            // create Googleuser entry in the database
            const userInfo = {
                name: user?.displayName,
                email: user?.email,
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data)
                toast.success('Signin With Google Successful')
                navigate(from, {replace: true})
            })
            
            
        }
        catch (err){
            // console.log(err)
            toast.error(err?.message)
        }
    }

   

    return (
        <div> 
            <Helmet>
                <title>Login Page | Sip 7 Savory</title>
            </Helmet>
            <div className="flex mt-2 w-full bg-[#F1F2F4] shadow-lg max-w-sm mx-auto overflow-hidden dark:bg-gray-800 lg:max-w-4xl rounded-2xl">
    <div className="hidden bg-cover lg:block lg:w-1/2" style={{backgroundImage: `url(${login})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',}}></div>

    <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div className="flex justify-center mx-auto">
            <p className='font-bold text-3xl'>Login</p>
        </div>
        <div className='flex justify-end'>
                <Link to='/' className='btn btn-outline btn-primary btn-xs'>Go Home</Link>
             </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Email Address</label>
                <input id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" name='email' placeholder='john@gmail.com' {...register("email", { required: true })} />
            </div>
            {errors.email && <span className='text-red-600'>Email is required</span>}

            <div className="mt-4">
                <label 
                    className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" 
                    htmlFor="loggingPassword"
                >
                    Password
                </label>
            <div className="relative">
                <input
                    id="loggingPassword"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="********"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })}
                />
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-2 top-2 text-white bg-gray-700 dark:text-gray-300 focus:outline-none p-1 rounded-md"
                >
                    {showPassword ? <BiShow /> : <BiHide />}
                </button>
            </div>
        </div>
             {errors.password?.type === "required" && ( <p className='text-red-600'>Password is required</p>)}
            {errors.password?.type === "minLength" && ( <p className='text-red-600'>Password Should have at least 6 characters</p>)}
            {errors.password?.type === "maxLength" && ( <p className='text-red-600'>Password must have under 20 characters</p>)}
            {errors.password?.type === "pattern" && ( <p className='text-red-600'>Password Should have one upper and lower case, one special character, one number</p>)}

            <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="captcha">
                    <LoadCanvasTemplate />
                </label>
                <input onBlur={handleChaptcha} id="captcha" className="mb-2 block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" name='captcha' placeholder='type the captcha' />
            </div>

            <div className="mt-6">
                <input disabled={disable} className="btn btn-primary w-full" type="submit" value="Login" />
            </div>
        </form>

            <div className="flex items-center justify-center py-4 text-center">
        <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

        <Link to='/registration' className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</Link>
    </div>

        <div className="flex items-center justify-between">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <p className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">
            or sign up</p>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
        <div className="flex items-center justify-evenly mt-4 mx-20">
            <span title='Facebook' className="border border-gray-700 rounded-3xl p-2 hover:underline"><FaFacebook /></span>

            <span onClick={handleGoogleSignIn} title='Google' href="#" className="border border-gray-700 rounded-3xl hover:underline p-2"><FcGoogle /></span>

            <span title='Github' className="border border-gray-700 rounded-3xl p-2 hover:underline"><FaGithub /></span>
        </div>
    </div>
</div>
        </div>
    );
};

export default Login;