import React from 'react'
import Typed from 'react-typed';

export default function Hero() {
    return (
        <div className='text-white'>
            <div className='max-w[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='uppercase text-[#00df4a] font-bold p-2'>Growing with data analytics</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                        fast, flexible financing for
                    </p>
                    <Typed
                        className='md:text-5xl sm:text-4xl text-xl md:pl-4 font- pl-2'
                        strings={['Javascript', 'React.js', 'Tailwind.css']}
                        typeSpeed={120}
                        backSpeed={140}
                    />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Lorem ipsum dolor sit amet consectetur, accusantium magnam.</p>
                <button className='bg-[#00df4a] w-[200px] hover:bg-[#000300] hover:text-white hover:border-[#00df4a] border-solid border-2 border-[#000300] rounded-md font-medium my-6 mx-auto py-3 text-black ease-in-out duration-300'>Get Started</button>
            </div>
        </div>
    )
}