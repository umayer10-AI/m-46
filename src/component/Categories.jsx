import { Data } from '@/context/Context';
import React, { useContext } from 'react';
import CatagoriList from './CatagoriList';

const allData = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    return res.json()
}

const Categories = async () => {

    const f = await allData()
    const data = f.data.news_category
    console.log(f.data.news_category)

    return (
        <div>
            <h2 className='font-bold text-xl mb-5'>All Caterogy</h2>
            <CatagoriList p={data}></CatagoriList>
        </div>
    );
};

export default Categories;