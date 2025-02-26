import React,{useRef,useState,useEffect} from 'react';
let count =1;
function Useref(){
  
const inputref=useRef(null);
function handel(){
    console.log(inputref);
   (count%2==0)?inputref.current.style.backgroundColor="yellow":inputref.current.style.backgroundColor="white";
    
    count+=1;
}

useEffect(()=>{

    console.log("rerendered");
})
   return(<>
         <button onClick={handel}>click me </button>
         <input ref={inputref}></input>
   </>
    
   )

}

export default Useref;