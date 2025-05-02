import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto py-4'>
                <Navbar></Navbar>
            </header>

            {/* main */}
            <main className='w-11/12 mx-auto py-5'>
                <Outlet/>
            </main>
        </div>
    );
};

export default AuthLayout;