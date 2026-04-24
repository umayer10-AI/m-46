import React from 'react';
import { HiUserCircle } from 'react-icons/hi';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center max-w-[90%] mx-auto my-5'>
            <div>

            </div>
            <div className='flex items-center gap-2'>
                <h2 className='btn'>Home</h2>
                <h2 className='btn'>About</h2>
                <h2 className='btn'>Career</h2>
            </div>
            <div className='flex items-center gap-2'>
                <h2 className='text-4xl'><HiUserCircle /></h2>
                <h2 className='btn bg-black text-white font-bold px-8'>Login</h2>
            </div>
        </div>
    );
};

export default Navbar;