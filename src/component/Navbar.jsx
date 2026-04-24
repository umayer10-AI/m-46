import React from 'react';
import { HiUserCircle } from 'react-icons/hi';

const Navbar = () => {
    return (
        <div>
            <div>

            </div>
            <div className='flex items-center gap-2'>
                <h2 className='btn'>Home</h2>
                <h2 className='btn'>About</h2>
                <h2 className='btn'>Career</h2>
            </div>
            <div>
                <h2><HiUserCircle /></h2>
            </div>
        </div>
    );
};

export default Navbar;