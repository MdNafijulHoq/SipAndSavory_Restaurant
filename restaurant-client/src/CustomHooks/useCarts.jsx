import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useCarts = () => {
    const axiosSecure = useAxiosSecure();
    const {data, isLoading } = useQuery({
        queryKey: ['carts'],
        queryFn: async () => {
            const result = await axiosSecure.get('/carts')
            return result.data
        }
    })
    return { data, isLoading };
};

export default useCarts;