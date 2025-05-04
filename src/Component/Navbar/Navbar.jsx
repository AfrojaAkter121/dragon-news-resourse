import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../../assets/assets/user.png'
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const {user, logOutUser} = use(AuthContext)
    
    const handleLogout = ()=> {
        toast("Logout Successfully")
        logOutUser().then(()=> {
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='flex justify-between items-center'>
            <div >
              {  user &&  <h1 className='text-xl text-white bg-secondary px-3 py-1 rounded-lg'>
                    {user.displayName}
                </h1>}
                </div>
            <div className='nav flex gap-4 text-accent text-lg'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex gap-4'>
                <img className='w-12 items-center rounded-full' src={`${user ? user.photoURL : userIcon}`} alt=""  />
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