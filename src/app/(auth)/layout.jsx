import Header from '@/component/Header';
import Navbar from '@/component/Navbar';
import React from 'react';
import { montserrat } from '../layout';

const layout = ({children}) => {
    return (
        <div className={`${montserrat.className}`}>
            <Header></Header>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default layout;