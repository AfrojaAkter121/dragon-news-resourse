import React from 'react';
import logo from '../../assets/assets/logo.png'
import { format } from "date-fns";
const Header = () => {
    return (
        <div className='flex flex-col space-y-3 justify-center items-center'>
            <img src={logo} className='w-[471px]'  alt="" srcset="" />
            <h1 className='text-accent text-xl'>Journalism Without Fear or Favour</h1>
            <p>{format(new Date(), "EEEE ,MMMM MM ,uuuu")}</p>
        </div>
    );
};

export default Header;