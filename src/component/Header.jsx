import React from 'react';
import img from "../assets/logo.png"
import Image from 'next/image';

const Header = () => {
    return (
        <div className='text-center space-y-2 my-5'>
            {/* <h2 className=' text-2xl lg:text-4xl font-bold'>The Dragon News</h2> */}
            <Image src={img} height={320} width={320} className='mx-auto' alt='logo'></Image>
            <p className='font-semibold text-gray-500'>Journalism Without Fear or Favour</p>
            <p className='font-semibold'>Sunday, November 27, 2025</p>
        </div>
    );
};

export default Header;