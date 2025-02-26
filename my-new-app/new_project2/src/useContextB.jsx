import React,{useEffect,useContext,useState} from 'react';
import style from './useContext.module.css';
import UsecontextC from './useContextC';

function UsecontextB(){
             

    return (
        <>
        <div className={style.a}>
            component B
            <UsecontextC ></UsecontextC>
           
        </div>
        </>
    )
}

export default UsecontextB;