"use client"
import React, { createContext, useState } from 'react';

export const Data = createContext()

const Context = ({children}) => {

    const [cat, setC] = useState('01')

    return (
        <Data.Provider value={{cat,setC}}>
            {children}
        </Data.Provider>
    );
};

export default Context;