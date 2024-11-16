import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    const location = useLocation()
    // console.log(location)
    const noNavbarFooter = location.pathname.includes('loginRegTabs') || location.pathname.includes('login') || location.pathname.includes('registration')
    return (
        <div>
           { noNavbarFooter || <NavBar></NavBar>}
            <div className='min-h-[calc(100vh-263px)]'>
                
                <Outlet></Outlet>
            </div>
           { noNavbarFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;