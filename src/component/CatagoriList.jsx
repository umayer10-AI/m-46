"use client"
import { Data } from '@/context/Context';
import Link from 'next/link';
import React, { useContext } from 'react';

const CatagoriList = ({p}) => {

    const {cat,setC} = useContext(Data)

    return (
        <div>
            <div className='flex flex-col'>
                {/* <Link href={`/category/${v.category_id}`} className={`font-semibold btn btn-info text-white`}>All News</Link> */}
                {
                    p.map(v => (
                        <Link href={`/category/${v.category_id}`}
                        key={v.category_id}
                        onClick={() => setC(v)}
                          className={`font-semibold btn ${cat===v && "btn-warning"}`}>{v.category_name}
                           
                          </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default CatagoriList;