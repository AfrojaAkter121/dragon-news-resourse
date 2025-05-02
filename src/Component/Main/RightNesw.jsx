import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from '../../Layout/FindUs';
import Qzon from '../../Layout/Qzon';

const RightNesw = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin/>
            <FindUs></FindUs>
            <Qzon></Qzon>
        </div>
    );
};

export default RightNesw;