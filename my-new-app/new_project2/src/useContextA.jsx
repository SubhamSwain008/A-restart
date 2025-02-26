import React,{useEffect,createContext,useState} from 'react';
import style from './useContext.module.css';
import UsecontextB from './useContextB';

export const UserContext=createContext();

function UsecontextA(){
             const[user,Setuser]=useState("brocode");

    return (
        <>
        <div className={style.a}>
            component A
            <h2>Hello! {user}</h2>
              <UserContext.Provider value={user}>
              
              <UsecontextB ></UsecontextB>
              </UserContext.Provider>
              
        </div>
        </>
    )
}

export default UsecontextA;