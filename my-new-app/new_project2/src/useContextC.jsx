import React,{useEffect,useContext,useState} from 'react';
import style from './useContext.module.css';
import UsecontextD from './useContextD';
function UsecontextC(){
             

    return (
        <>
        <div className={style.a}>
            component c
            <UsecontextD ></UsecontextD>
        </div>
        </>
    )
}

export default UsecontextC;