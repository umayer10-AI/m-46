import React from 'react';
import { HiUserCircle } from 'react-icons/hi';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='grid grid-cols-3 items-center max-w-[80%] mx-auto my-5'>
            <div>
                <h2></h2>
                <h2></h2>
                <h2></h2>
            </div>
            <NavLink></NavLink>
            <div className='flex items-center gap-2 justify-end'>
                <h2 className='text-4xl'><HiUserCircle /></h2>
                <h2 className='btn bg-black text-white font-bold px-8'>Login</h2>
            </div>
        </div>
    );
};

export default Navbar;