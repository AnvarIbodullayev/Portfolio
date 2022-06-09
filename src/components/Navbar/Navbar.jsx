import React, { useState } from 'react'
import { AiOutlineClose} from 'react-icons/ai'
import { HiMenuAlt1 } from 'react-icons/hi'
import { Link } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import './Navbar.css';

export default function Navbar() {
    
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <Link to='/' className='p-4'>
                <h1 className='text-3xl font-bold text-[#00df4a]'>an0n.</h1>
            </Link>
            
            <nav className='hidden md:flex list-none'>
                <Link to='/' className='p-4 nav-item'>.home( )</Link>
                <Link to='/whoami' className='p-4 nav-item'>.whoami( )</Link>
                <Link to='/works' className='p-4 nav-item'>.works( )</Link>
                <Link to='/contact' className='p-4 nav-item'>.contact( )</Link>
                <Link to='/signin' className='p-4 nav-item'>
                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#00df4a] relative inline-block">
                        <span className="relative text-black">Sign in</span>
                    </span>
                </Link>
                <Link to='/signup'>
                    <button className="w-full h-full px-6 uppercase font-semibold tracking-wider border-2 border-[#00df4a] bg-black text-[#00df4a] hover:bg-[#00df4a] hover:text-black ease-in-out duration-500" type="submit">
                        Sign Up
                    </button>
                </Link>
            </nav>
            <div onClick={handleNav} className='block md:hidden cursor-pointer'>
                {
                    !nav ? <AiOutlineClose size={24} /> : <HiMenuAlt1 size={24} />
                }
            </div>
            <div className={!nav ? 'navleft fixed left-0 top-0 w-[90%] h-full ease-in-out duration-500 blurr-content' : 'navleft fixed left-[-100%]'}></div>
            <div className={!nav ? 'navleft fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-600 bg-[#000300] ease-in-out duration-500' : 'navleft fixed left-[-100%]'}>
                <h1 className='text-3xl font-bold text-[#00df4a] m-4'>an0n.</h1>
                <ul className='p-4 uppercase flex flex-col'>
                    <Link to='/' className='p-4 nav-item border-b border-gray-900'>.home( )</Link>
                    <Link to='/whoami' className='p-4 nav-item border-b border-gray-700'>.whoami( )</Link>
                    <Link to='/works' className='p-4 nav-item border-b border-gray-500'>.works( )</Link>
                    <Link to='/contact' className='p-4 nav-item border-b border-gray-700'>.contact( )</Link>
                    <Link to='/signin' className='p-4 nav-item'>
                        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#00df4a] relative inline-block">
                            <span className="relative text-black">Sign in</span>
                        </span>
                    </Link>
                    <Link to='/signup'>
                        <button className="px-11 py-3 w-full uppercase font-semibold tracking-wider border-2 border-[#00df4a] bg-black text-[#00df4a] hover:bg-[#00df4a] hover:text-black ease-in-out duration-500" type="submit">
                            Sign Up
                        </button>
                    </Link>
                </ul>
            </div>
        </div>
    )
}