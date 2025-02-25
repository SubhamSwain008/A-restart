import React,{useState} from 'react';

function MyComponents(){
    const[name,setName]=useState("jane doe");

    const[age,setAge]=useState(0);


    const updateName=()=>{
        const x=prompt("whats your name ?");
        setName(x);
    }

    const updateAge=()=>{
          setAge(age+1);
    } 

    return (<>
        <p>Name :{name}</p>
        <button onClick={updateName}>
            Click to set name
        </button>

        <p>Age:{age}</p>
        <button onClick={updateAge}>
            Click to increse age
        </button>
    </>
       
    )
}

export default MyComponents;