import Header from '@/component/Header';
import Navbar from '@/component/Navbar';
import React from 'react';
import { montserrat } from '../layout';
import BreakingNews from '@/component/BreakingNews';

const layout = ({children}) => {
    return (
        <div className={`${montserrat.className}`}>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default layout;