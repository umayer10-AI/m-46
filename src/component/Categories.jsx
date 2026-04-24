"use client"
import { Data } from '@/context/Context';
import React, { useContext } from 'react';

const categories = [
  "Breaking News",
  "Politics",
  "Sports",
  "Technology",
  "Entertainment",
  "Business",
  "Health",
  "Science",
  "World",
  "Education",
];

const Categories = () => {

    const {cat,setC} = useContext(Data)

    return (
        <div>
            <h2 className='font-bold text-xl'>All Caterogy</h2>
            <div className='flex flex-col'>
                {
                    categories.map((v,i) => (
                        <h2
                        onClick={() => setC(v)}
                         key={i} className={`font-semibold btn ${cat===v? "btn-warning": "text-gray-500"}`}>{v}</h2>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;