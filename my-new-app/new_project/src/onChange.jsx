//onChange 


import React,{useState} from 'react';

function Onchange(){

   const [name,setName]=useState();

   function nammeChange(Event){

    setName(Event.target.value);
   }

   return (
          <>
          <input value={name} onChange={(e)=>nammeChange(e)}></input>
          <p>Name :{name}</p>
          </>

   );

}

export default Onchange;
