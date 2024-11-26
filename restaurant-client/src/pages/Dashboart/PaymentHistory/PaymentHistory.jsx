import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../CustomHooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data
        }
        
    })
    return (
        <div>
            <Helmet>
        <title>Payment History | Sip & Savory</title>
      </Helmet>
            
                <div className='flex items-center gap-x-3'>
                    <h2 className="text-lg font-medium text-gray-800 dark:text-white">Total Payment:</h2>
                    <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                    {data?.length || 0}</span>
                </div>

    <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <button className="flex items-center justify-center gap-x-2">
                                        <span>Email</span>
                                </button>
                                </th>

                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <button className="flex items-center justify-center gap-x-2">
                                        <span>TransactionID</span>
                                    </button>
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <button className="flex items-center justify-center gap-x-2">
                                        <span>Total Price</span>
                                    </button>
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <button className="flex items-center justify-center gap-x-2">
                                        <span>Payment Date</span>
                                    </button>
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <button className="flex items-center justify-center gap-x-2">
                                        <span>Status</span>
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                {data?.map((item, index) => (
                                    <tr key={item._id || index}>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center gap-x-3">
                                        <span>{index + 1}</span>
                                        <h2 className="text-sm font-normal">{item.email}</h2>
                                        </div>
                                    </td>
                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <h2 className="text-sm font-normal">{item.transactionId}</h2>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                       <h2 className="text-sm font-normal"> ${item.price}</h2>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                        <h2 className="text-sm font-normal">{item.date}</h2>
                                    </td>

                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                        <h2 className="text-sm font-normal">{item.status}</h2>
                                    </td>
                                    </tr>
                                ))}
                                </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default PaymentHistory;