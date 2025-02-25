import React,{useEffect,useState} from 'react';

function Useeffect(){

const [hours,setHours]=useState(new Date().getHours());
const [mins,setMins]=useState(new Date().getMinutes());
const [sec,setSecs]=useState(new Date().getSeconds());


useEffect(()=>{
    

   const iid= setInterval(()=>{
        setHours(h=>h=new Date().getHours());
        setMins(m=>m=new Date().getMinutes());
        setSecs(s=>s=new Date().getSeconds());
        
        document.title=`${hours}:${mins}:${sec}`},1000);

        return ()=>{
            clearInterval(iid);
        }
});



const style1={
    color:"white"
}

//everry time the page rerenders and the value inside the array chnages the funtion is called 
//with out the array or with the empty array the function will be called everytime the page rerenders

return(<>
<div>
    <h1 style={style1}>Current time:{hours}:{mins}:{sec}</h1>
</div>
       

</>)
}

export default Useeffect;