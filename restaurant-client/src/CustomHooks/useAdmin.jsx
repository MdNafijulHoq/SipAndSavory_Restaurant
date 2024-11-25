import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;