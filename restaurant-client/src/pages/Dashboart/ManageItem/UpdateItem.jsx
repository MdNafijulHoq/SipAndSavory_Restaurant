import React from 'react';
import { useForm } from 'react-hook-form';
import CategorySection from '../../../components/FoodCategorySection/CategorySection';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../../../CustomHooks/useAxiosPublic';
import useAxiosSecure from '../../../CustomHooks/useAxiosSecure';
import toast from 'react-hot-toast';

const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const item = useLoaderData();
    console.log(item);
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
             const menuRes = await axiosSecure.patch(`/menu/${item._id}`, menuItem)
             console.log(menuRes.data)
             if(menuRes.data.modifiedCount > 0){
                // reset();
                toast.success(`${data.name} is updated to the menu.`)
                }
        }
    }
    return (
      <div>
        <CategorySection subHeading='Refresh Info' heading='Update Item'></CategorySection>
          <div className='bg-slate-100 dark:bg-slate-300 px-6 sm:px-10 lg:px-14 py-6 rounded-md'>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe name*</span>
                        </label>
                        <input {...register("name", { required: true })}
                            type="text" defaultValue={item.name}
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
                                defaultValue={item.category}>
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
                            <input {...register("price", { required: true })} defaultValue={item.price}
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
                        <textarea {...register("recipe", { required: true })} defaultValue={item.recipe}
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
                    <button className='btn flex mx-auto text-white mt-6 bg-gradient-to-r from-amber-900 to-amber-600'>
                        UPDATE ITEM
                    </button>
                </form>
</div>
      </div>
    );
};

export default UpdateItem;