import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { auth } from '../../Firebase/firebase.config';
import { Bounce, toast } from 'react-toastify';

const SocialLogin = () => {

    const provider = new GoogleAuthProvider();
    const providerGit = new GithubAuthProvider();
   
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider).then(()=> {
            toast.success('Google Login Successful! Enjoy your session.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
        }).catch(err => {
            console.log(err)
        })
    }

    const handleGithubSingIn = () => {
        signInWithPopup(auth, providerGit).then(() => {
            toast.success('GitHub Login Successful! Enjoy your session.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <h1 className='text-xl font-bold'>Login With</h1>
            <div className='mt-5 space-y-3'>
                <button onClick={handleGoogleLogin} className='btn btn-outline btn-secondary w-full'><FaGoogle size={24}/> Login with Google</button>
                <button onClick={handleGithubSingIn} className='btn btn-outline btn-primary w-full'><FaGithub size={24}/> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;