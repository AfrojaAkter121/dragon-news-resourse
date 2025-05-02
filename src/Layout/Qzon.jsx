import React from 'react';
import swimmingImg from '../assets/assets/swimming.png'
import playing from '../assets/assets/playground.png'
import classImg from '../assets/assets/class.png'

const Qzon = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h1 className='font-bold mb-5'>QZon</h1>
            <div>
                <img src={swimmingImg} alt="" srcset="" />
                <img src={classImg} alt="" srcset="" />
                <img src={playing} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Qzon;