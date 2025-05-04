import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Component/Header/Header';
import LatestNews from '../Component/LatestNews/LatestNews';
import Navbar from '../Component/Navbar/Navbar';
import LeftNews from '../Component/Main/LeftNews';
import RightNesw from '../Component/Main/RightNesw';
import Loader from '../Component/Loader/Loader';

const HomeLayout = () => {
    const {state} = useNavigation()
    return (
        <div className='pt-7'>
            <header>
                <Header></Header>
                {import.meta.env.VITE_name}
                <section className='w-11/12 mx-auto my-3'>
                <LatestNews></LatestNews>
                </section>
                <section  className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
                </section>
            </header>

            <main className='w-11/12 mx-auto my-5 grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftNews></LeftNews>
                </aside>
                <section className="main col-span-6">
                   {state == 'loading' ? <Loader></Loader> : <Outlet></Outlet>} 
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightNesw></RightNesw>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;