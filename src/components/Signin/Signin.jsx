import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { GoogleButton } from 'react-google-button';

export default function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const { signIn, googleSignIn, gihubSignIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try{
            await signIn(email, password)
            navigate('/account')
        } catch(e) {
            setError(e.message)
            console.log(e.message);
        }
    }

    const handleGoogleSign = async (e) => {
        try {
            await googleSignIn()
            navigate('/account')
        } catch (e) {
            console.log(e);
        }
    }

    const handleGitubSign = async (e) => {
        try {
            await gihubSignIn()
            navigate('/account')
        } catch (e) {
            setError(e)
            console.log(e);
        }
    }

    return (
        <div className='max-w-[700px] mx-auto my-16 p-4'>
            <div>Signup</div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col py-2'>
                    <label className='py-2 font-medium text-white'>Email Address</label>
                    <input onChange={(e) => setEmail(e.target.value)} className='border border-[#00df4a] text-[#00df4a] focus-visible:outline-none p-3 bg-[#000300]' type='email' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='py-2 font-medium text-white'>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} className='border border-[#00df4a] text-[#00df4a] focus-visible:outline-none p-3 bg-[#000300]' type='password' />
                </div>
                <button className='border-2 border-[#000300] bg-[#00df4a] hover:bg-[#000300] hover:border-[#00df4a] hover:text-white w-full p-4 my-2 text-black '>
                    Sign In
                </button>
                <GoogleButton onClick={handleGoogleSign} className='google-button' />
            </form>
        </div>
    )
}