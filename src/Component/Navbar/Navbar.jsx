import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../../assets/assets/user.png'
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const {user, logOutUser} = use(AuthContext)
    
    const handleLogout = ()=> {
        logOutUser().then(()=> {
            alert('User Logout')
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='flex justify-between'>
            <div></div>
            <div className='nav flex gap-4 text-accent text-lg'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex gap-4'>
                <img src={userIcon} alt=""  />
                {
                    user ? 
                    <button onClick={handleLogout} className='btn btn-primary'>Log out</button> 
                    :
                    <Link to='/auth/login' className='btn btn-primary'>Log in</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;