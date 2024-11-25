import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import contactCover from "../../../src/assets/contact/banner.jpg";
import CategorySection from "../../components/FoodCategorySection/CategorySection";
import { MdLocalPhone } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { BsFillSendFill } from "react-icons/bs";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";
import toast from "react-hot-toast";

const Contact = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
        // console.log(data)
        const contactInfo = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
        }
        const res = await axiosPublic.post('/contact-us', contactInfo)
        // console.log(res)
        reset()
        if(res.data.insertedId){
            toast.success("Thanks for geting in Touch!")
        }
        return res.data;
       
    }
  return (
    <div>
      {/* Page Metadata */}
      <Helmet>
        <title>Contact | Sip & Savory</title>
      </Helmet>

      {/* Page Banner */}
      <Cover
        img={contactCover}
        title={"Contact US"}
        description={"Would you like to try a dish?"}
      />

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

      {/* Category Section */}
      <CategorySection subHeading="Send Us a Message" heading="CONTACT FORM" />
      {/* From */}
      <div className='bg-slate-100 dark:bg-slate-300 px-6 sm:px-10 lg:px-14 py-6 rounded-md mb-14'>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    
                     <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4">
                         {/* name */}
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
                         {/* Email */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Email*</span>
                                </label>
                                <input {...register("email", { required: true })} 
                                    type="email" 
                                    placeholder="Your Email" 
                                    className="input input-bordered w-full"
                                />
                            </div>   
                     </div>
                     <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Phone*</span>
                                </label>
                                <input {...register("phone", { required: true })} 
                                    type="text" 
                                    placeholder="Phone number" 
                                    className="input input-bordered w-full"
                                />
                     </div>   

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Message*</span>
                        </label>
                        <textarea {...register("message", { required: true })} 
                            className="textarea textarea-bordered h-24" 
                            placeholder="Write Your Message..">
                        </textarea>
                    </div>
                    
                    <button className='btn flex mx-auto text-white mt-6 bg-gradient-to-r from-amber-900 to-amber-600'>
                        SEND MESSAGE <BsFillSendFill className="w-5 h-5"/>
                    </button>
                </form>
</div>
    </div>
  );
};

export default Contact;
