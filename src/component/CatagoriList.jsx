"use client"
import { Data } from '@/context/Context';
import React, { useContext } from 'react';

const CatagoriList = ({p}) => {

    const {cat,setC} = useContext(Data)

    return (
        <div>
            <div className='flex flex-col'>
                <h2 className={`font-semibold btn btn-info text-white`}>National News</h2>
                {
                    p.map(v => (
                        <h2
                        key={v.category_id}
                        onClick={() => setC(v)}
                          className={`font-semibold btn ${cat===v && "btn-warning"}`}>{v.category_name}</h2>
                    ))
                }
            </div>
        </div>
    );
};

export default CatagoriList;