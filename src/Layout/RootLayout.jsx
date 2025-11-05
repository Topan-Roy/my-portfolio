import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer/Footer';
import CursorGlow from '../component/CursorGlow/CursorGlow';


const RootLayout = () => {
    return (
        <div className='w-full mx-auto'>
            <CursorGlow></CursorGlow>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            <Footer></Footer>        
        </div>
    );
};

export default RootLayout;