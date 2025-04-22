import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet, useLocation } from 'react-router';

const Root = () => {
    const location = useLocation();
    const isContactPage = location.pathname === '/contactUs';

    return (
        <div className='bg-[#EFEFEF] min-h-screen flex flex-col'>
            <Navbar />
            <div className="flex-grow">
                <Outlet />
            </div>
            {!isContactPage && <Footer />}
        </div>
    );
};

export default Root;
