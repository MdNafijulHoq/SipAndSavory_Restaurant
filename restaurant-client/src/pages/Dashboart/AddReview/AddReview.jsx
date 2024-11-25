import React, { useContext } from 'react';
import CategorySection from '../../../components/FoodCategorySection/CategorySection';
import { useForm } from 'react-hook-form';
import { MdOutlineRocketLaunch } from "react-icons/md";
import useAxiosPublic from '../../../CustomHooks/useAxiosPublic';
import { AuthContext } from '../../../Providers/AuthProviders';
import toast from 'react-hot-toast';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext);
    const onSubmit = async (data) => {
        // console.log(data)
        const review = {
            userName: user?.displayName,
            likeMost: data.likeMost,
            suggestion: data.suggestion,
            rating: parseInt(data.rating),
            details: data.details,
        }
        const res = await axiosPublic.post('/reviews', review)
        reset();
        if(res.data.insertedId){
            toast.success('Thanks, Your review added!')
        }
        return res.data
    }
    return (
        <div>
            <CategorySection subHeading="Sharing is Caring!!!" heading="GIVE A REVIEW..."></CategorySection>
            <div className='bg-slate-100 dark:bg-slate-300 px-6 sm:px-10 lg:px-14 py-6 rounded-md'>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Which recipe you liked most?</span>
                        </label>
                        <input {...register("likeMost", { required: true })}
                            type="text"
                            placeholder="Recipe you liked most" 
                            className="input input-bordered w-full"
                        />
                    </div>
                       
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Do you have any suggestion for us?</span>
                            </label>
                            <input {...register("suggestion", { required: true })}
                                type="text" 
                                placeholder="Sugggestion" 
                                className="input input-bordered w-full"
                            />
                        </div>   

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Rating</span>
                            </label>
                            <select
                                {...register("rating", { required: true })}
                                className="select select-bordered w-full"
                                defaultValue="">
                                <option value="" disabled>Rate Us</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>

                        </div>
                     
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Kindly express your care in a short way.</span>
                        </label>
                        <textarea {...register("details", { required: true })}
                            className="textarea textarea-bordered h-24" 
                            placeholder="Review in detail">
                        </textarea>
                    </div>
                    
                    <button className='btn flex mx-auto text-white mt-6 bg-gradient-to-r from-amber-900 to-amber-600'>
                        SEND REVIEW <MdOutlineRocketLaunch className='w-5 h-5'/>
                    </button>
                </form>
</div>
        </div>
    );
};

export default AddReview;