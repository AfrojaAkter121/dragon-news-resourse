import React from 'react';
import { NavLink } from 'react-router';
import user from '../../assets/assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div></div>
            <div className='nav flex gap-4 text-accent text-lg'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex gap-4'>
                <img src={user} alt="" srcset="" />
                <button className='btn btn-primary'>Log in</button>
            </div>
        </div>
    );
};

export default Navbar;