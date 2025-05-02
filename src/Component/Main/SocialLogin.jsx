import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='text-xl font-bold'>Login With</h1>
            <div className='mt-5 space-y-3'>
                <button className='btn btn-outline btn-secondary w-full'><FaGoogle size={24}/> Login with Google</button>
                <button className='btn btn-outline btn-primary w-full'><FaGithub size={24}/> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;