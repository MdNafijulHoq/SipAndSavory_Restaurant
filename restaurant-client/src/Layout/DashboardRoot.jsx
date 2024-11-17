import React from 'react';
import DashBoart from '../pages/Dashboart/Dashboart/DashBoart';
import { Outlet } from 'react-router-dom';

const DashboardRoot = () => {
    return (
        <div className='relative min-h-screen md:flex'>
            
            <DashBoart></DashBoart>
           
            <div className='flex-1 md:ml-64'>
                <div className='p-5'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardRoot;