import React from 'react';
import CategorySection from '../../../components/FoodCategorySection/CategorySection';
import useMenu from '../../../CustomHooks/useMenu';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../CustomHooks/useAxiosSecure';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ManageItem = () => {
    const [ menu, refetch ] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async (result) => {
            if (result.isConfirmed) {
             const res = await axiosSecure.delete(`/menu/${item._id}`)
             console.log(res.data)
             if(res.data.deletedCount > 0){
                refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: `${item.name} has been deleted`,
                    icon: "success"
                  });
             }
            }
          });
    }
    return (
        <>
        <Helmet>
        <title>Manage Item | Sip & Savory</title>
      </Helmet>
            <CategorySection subHeading="Hurry Up!" heading="MANAGE ALL ITEMS"></CategorySection>
        <section className="container px-4 mx-auto">
        <div className='flex items-center gap-x-3'>
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Total Items</h2>
             <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            {menu?.length || 0}</span>      
        </div>

    <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-amber-600 dark:bg-amber-800">
                            <tr>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-white">
                                <button className="flex items-center justify-center gap-x-2">
                                        <span>Item Image</span>
                                </button>
                                </th>

                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-white">
                                    <button className="flex items-center justify-center gap-x-2">
                                        <span>Item Name</span>
                                    </button>
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">
                                    <button className="flex items-center justify-center gap-x-2">
                                        <span>Price</span>  
                                    </button>
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">
                                    <button className="flex items-center justify-center gap-x-2">
                                        <span>Action</span> 
                                    </button>
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">
                                    <button className="flex items-center justify-center gap-x-2">
                                        <span>Action</span>
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                    {
                                        menu.map((item, index) => 
                                            <tr key={item._id}>
                                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                            <div className="inline-flex items-center gap-x-3">
                                            <span> {index + 1}</span>
                                            <img
                                                className="object-cover w-10 h-10 rounded-full"
                                                src={item.image}
                                                alt={item.name}
                                            />
                                            </div>
                                        </td>
                                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                            <h2 className="text-sm font-normal">{item.name}</h2>
                                        </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                        ${item.price}
                                    </td>

                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                            <Link to={`/dashboard/updateItem/${item._id}`}>
                                                <button className="text-white bg-amber-500 p-2 rounded-lg transition-colors duration-200 dark:hover:text-amber-600 dark:text-gray-300 focus:outline-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg>
                                                 </button>
                                            </Link>
                                    </td>

                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                        <button onClick={() => handleDeleteItem(item)} className="text-white bg-red-800 p-2 rounded-lg transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 focus:outline-none">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            />
                                        </svg>
                                        </button>
                                    </td>
                                    </tr>
                                        )
                                    }
                                </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
   
</section>
        </>
    );
};

export default ManageItem;