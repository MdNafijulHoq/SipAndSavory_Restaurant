import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import toast from 'react-hot-toast';
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { useForm } from "react-hook-form"
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../CustomHooks/useAxiosPublic';

const Registration = () => {
    const {user, loading, setUser, createUser, logOut, updateUserProfile} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        // console.log(data)

        try{
            const result = await createUser(data.email, data.password)
            // console.log(result)
            await updateUserProfile(data.name, data.photo)
            setUser(
                {
                    ...user, photoURL: data.photo, displayName: data.name
                }
            )

            // create user entry in the database
            const userInfo = {
                name: data.name,
                email: data.email
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                if(res.data.insertedId){
                    toast.success('SignIn Successful')
                    logOut();
                    navigate('/login')
                }
            })
            
        }
        catch(error){
            // console.log(error)
            toast.error(error?.message)
        }
    }
    
    return (
        <section className=" dark:bg-gray-900 bg-[#F1F2F4] shadow-lg py-6 mt-2">
            <Helmet>
                <title>Registration Page | Sip 7 Savory</title>
            </Helmet>
    <div className="container flex items-center justify-center mt-2 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
             <p className='font-bold text-3xl text-center'>Registration</p>
             <div className='flex justify-end'>
                <Link to='/' className='btn btn-outline btn-primary btn-xs'>Go Home</Link>
             </div>

            <div className="relative flex items-center mt-8">
                
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>

                <input type="text" name='name' {...register("name", { required: true })}
                 className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username"/>
            </div>
            {errors.name && 
                    <span className='text-red-600'>Name is Required</span>
                 }
            
            

            <div className="relative flex items-center mt-6">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </span>

                <input type="email" name='email' {...register("email", { required: true })}
                 className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address"/>
                 
            </div>
            {errors.email && <span className='text-red-600'>Email is required</span>}

            <div className="relative flex items-center mt-4">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </span>

                <input type={showPassword ? 'text' : 'password'} {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })}
                 name='password' className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password"/>
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-3 text-white bg-gray-700 dark:text-gray-300 focus:outline-none p-1 rounded-md"
                >
                    {showPassword ? <BiShow /> : <BiHide />}
                </button>
                
            </div>
            {errors.password?.type === "required" && ( <p className='text-red-600'>Password is required</p>)}
            {errors.password?.type === "minLength" && ( <p className='text-red-600'>Password Should have at least 6 characters</p>)}
            {errors.password?.type === "maxLength" && ( <p className='text-red-600'>Password must have under 20 characters</p>)}
            {errors.password?.type === "pattern" && ( <p className='text-red-600'>Password Should have one upper and lower case, one special character, one number</p>)}

            <div className="relative flex items-center mt-4">
                <span className="absolute ml-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                </span>

                <input type="text" name='photo' {...register("photo", { required: true })}
                 className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="image url"/>
                 
            </div>
            {errors.photo && <span className='text-red-600'>provide your Photo</span>}

            <div className="mt-6">
                <input type='submit' className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" value='Registration'/>

                <div className="flex items-center justify-center py-4 text-center">
        <span className="text-sm text-gray-600 dark:text-gray-200">Already have an account?? </span>

        <Link to='/login' className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Login</Link>
    </div>
            </div>
        </form>
    </div>
</section>
    );
};

export default Registration;