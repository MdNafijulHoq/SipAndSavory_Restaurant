import React from 'react';
import CategorySection from '../../../components/FoodCategorySection/CategorySection';
import { FaUtensils } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../CustomHooks/useAxiosPublic';
import useAxiosSecure from '../../../CustomHooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgdb and then get an url
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data',
            },
        })
        if(res.data.success){
             // now send the menu item data to the server with the image
             const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url,
             }
             const menuRes = await axiosSecure.post('/menu', menuItem)
             console.log(menuRes.data)
             if(menuRes.data.insertedId){
                reset();
                toast.success(`${data.name} is added to the menu.`)
                }
        }
        console.log('with image url', res.data)
    }
    return (
        <div>
            <Helmet>
                <title>Add Item Page | Sip & Savory</title>
            </Helmet>
            <CategorySection subHeading="What's new?" heading="ADD AN ITEM"></CategorySection>
            <div className='bg-slate-100 dark:bg-slate-300 px-6 sm:px-10 lg:px-14 py-6 rounded-md'>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe name*</span>
                        </label>
                        <input {...register("name", { required: true })}
                            type="text"
                            placeholder="Recipe Name" 
                            className="input input-bordered w-full"
                        />
                    </div>
                     <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4">
                         {/* Category */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Category*</span>
                            </label>
                            <select
                                {...register("category", { required: true })}
                                className="select select-bordered w-full"
                                defaultValue="">
                                <option value="" disabled>Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                                <option value="offered">Offered</option>
                                <option value="popular">Popular</option>
                            </select>

                        </div>
                         {/* Price */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input {...register("price", { required: true })}
                                type="number" 
                                placeholder="Price" 
                                className="input input-bordered w-full"
                            />
                        </div>   
                     </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Details*</span>
                        </label>
                        <textarea {...register("recipe", { required: true })}
                            className="textarea textarea-bordered h-24" 
                            placeholder="Recipe details">
                        </textarea>
                    </div>
                    <div className='mt-6'>
                        <input {...register("image", { required: true })}
                            type="file" 
                            className="file-input w-full"
                        />
                    </div>
                    <button className='btn text-white mt-6 bg-gradient-to-r from-amber-900 to-amber-600'>
                        ADD ITEM <FaUtensils />
                    </button>
                </form>
</div>

        </div>
    );
};

export default AddItems;