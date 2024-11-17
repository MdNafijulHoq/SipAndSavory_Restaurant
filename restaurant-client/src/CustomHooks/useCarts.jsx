import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Providers/AuthProviders';

const useCarts = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const {data, isLoading, refetch } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const result = await axiosSecure.get(`/carts?email=${user.email}`)
            return result.data
        }
    })
    return { data, isLoading, refetch };
};

export default useCarts;