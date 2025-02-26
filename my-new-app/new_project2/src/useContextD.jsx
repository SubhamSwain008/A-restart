import React,{useEffect,useContext,useState} from 'react';
import style from './useContext.module.css';
import { UserContext } from './useContextA';

function UsecontextD(){
             const user= useContext(UserContext);
    return (
        <>
        <div className={style.a}>
            component D
            <h2>hello! {user}</h2>
        //passing prop manually at each level is called
        <br/> props drilling<br/>
        //this can be done by createContext and useContext;
        </div>
      
        </>
    )
}

export default UsecontextD;