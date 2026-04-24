"use client"
import { Data } from '@/context/Context';
import React, { useContext } from 'react';

const CatagoriList = ({p}) => {

    const {cat,setC} = useContext(Data)

    return (
        <div>
            <div className='flex flex-col'>
                {
                    p.map(v => (
                        <h2
                        key={v.category_id}
                        onClick={() => setC(v)}
                          className={`font-semibold btn ${cat===v? "btn-warning": "text-gray-500"}`}>{v.category_name}</h2>
                    ))
                }
            </div>
        </div>
    );
};

export default CatagoriList;