import React, { useContext } from 'react';
import CategorySection from '../../../components/FoodCategorySection/CategorySection';
import { useForm } from 'react-hook-form';
import { MdLocalPhone, MdOutlineRocketLaunch } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import { FaRegClock } from 'react-icons/fa';
import useAxiosPublic from '../../../CustomHooks/useAxiosPublic';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Reservation = () => {
    const { register, handleSubmit, reset } = useForm()
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
        // console.log(data)
        const reservation = { 
            date: data.date, 
            time: data.time, 
            guest: parseInt(data.guest), 
            name: data.name, 
            phone: data.phoneNo, 
            email: data.email,
        }
        const res = await axiosPublic.post('/reservation', reservation)
        reset()
        toast.success('Your reservation Added Successfully')
        navigate('/dashboard/myBooking')
        return res.data
    }
    return (
        <div>
          <Helmet>
        <title>Reservation | Sip & Savory</title>
      </Helmet>
            <CategorySection subHeading="Reservation" heading="BOOK A TABLE"></CategorySection>
            <div className='bg-slate-100 dark:bg-slate-300 px-6 sm:px-10 lg:px-14 py-6 rounded-md'>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4">

                     <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Date*</span>
                        </label>
                        <input {...register("date", { required: true })}
                            type="date"
                            placeholder="mm/dd/yyyy" 
                            className="input input-bordered w-full"
                        />
                    </div>
                       
                    <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Time*</span>
                            </label>
                            <input {...register("time", { required: true })}
                                type="time" 
                                placeholder="-- / -- --" 
                                className="input input-bordered w-full"
                            />
                    </div>   

                    <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Guest*</span>
                            </label>
                            <select
                                {...register("guest", { required: true })}
                                className="select select-bordered w-full"
                                defaultValue="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">5</option>
                                <option value="5">10</option>
                            </select>
                    </div>

                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4">

                     <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Name*</span>
                        </label>
                        <input {...register("name", { required: true })}
                            type="text"
                            placeholder="Your Name" 
                            className="input input-bordered w-full"
                        />
                    </div>
                       
                    <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Phone*</span>
                            </label>
                            <input {...register("phoneNo", { required: true })}
                                type="number" 
                                placeholder="Phone Number" 
                                className="input input-bordered w-full"
                            />
                    </div>   

                    <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Eamil*</span>
                            </label>
                            <input {...register("email", { required: true })} defaultValue={user?.email} readOnly
                                type="email" 
                                placeholder="Email" 
                                className="input input-bordered w-full"
                            />
                    </div>

                    

                </div>
                    
                     
                    
                    
                    <button className='btn flex mx-auto text-white mt-6 bg-gradient-to-r from-amber-900 to-amber-600'>
                        SEND REVIEW <MdOutlineRocketLaunch className='w-5 h-5'/>
                    </button>
                </form>
</div>

 {/* Category Section */}
 <CategorySection subHeading="Visit Us?" heading="Our Location" />

{/* Contact Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-16 mt-10">
  {/* Contact Card */}
  <div className="flex flex-col items-center justify-center">
    <div className="w-full max-w-xs bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <h3 className="py-2 bg-amber-500 flex justify-center items-center gap-x-2 font-bold tracking-wide text-white uppercase dark:text-white">
        Contact <MdLocalPhone className="w-5 h-5" />
      </h3>
      <div className="px-3 py-4 bg-gray-200 dark:bg-gray-700 text-center m-5">
        <p className="font-bold text-gray-800 dark:text-gray-200">
          Phone
        </p>
        <p className="text-gray-800 dark:text-gray-200">
          +38 (012) 34 56 789
        </p>
      </div>
    </div>
  </div>

  {/* Location Card */}
  <div className="flex flex-col items-center justify-center">
    <div className="w-full max-w-xs bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <h3 className="py-2 bg-amber-500 flex justify-center items-center gap-x-2 font-bold tracking-wide text-white uppercase dark:text-white">
        Location <IoLocationSharp className="w-5 h-5" />
      </h3>
      <div className="px-3 py-4 bg-gray-200 dark:bg-gray-700 text-center m-5">
        <p className="font-bold text-gray-800 dark:text-gray-200">
          Address
        </p>
        <p className="text-gray-800 dark:text-gray-200">3/A Lalmatia</p>
      </div>
    </div>
  </div>

  {/* Opening Hours Card */}
  <div className="flex flex-col items-center justify-center">
    <div className="w-full max-w-xs bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <h3 className="py-2 bg-amber-500 flex justify-center items-center gap-x-2 font-bold tracking-wide text-white uppercase dark:text-white">
        Opening <FaRegClock className="w-5 h-5" />
      </h3>
      <div className="px-3 py-4 bg-gray-200 dark:bg-gray-700 text-center m-5">
        <p className="font-bold text-gray-800 dark:text-gray-200">
          Working Hours
        </p>
        <p className="text-gray-800 dark:text-gray-200">
          Mon - Sat: 08:00 - 22:00
        </p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Reservation;