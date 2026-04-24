import React from 'react';
import img from "../assets/logo.png"
import Image from 'next/image';
import { compareAsc, format } from "date-fns";

const Header = () => {
    return (
        <div className='text-center space-y-2 my-5'>
            {/* <h2 className=' text-2xl lg:text-4xl font-bold'>The Dragon News</h2> */}
            <Image src={img} height={320} width={320} className='mx-auto' alt='logo'></Image>
            <p className='font-semibold text-gray-500'>Journalism Without Fear or Favour</p>
            <p className='font-semibold'>{format(new Date(), "EEEE, MMM dd, YYY")}</p>
        </div>
    );
};

export default Header;