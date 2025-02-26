import React ,{useState,useEffect,useRef} from 'react';
import style from './stopwatch.module.css';

function Stopwatch(){


const [isRunning,setisRuunning]=useState(false);
const [elapstime,setElaspasedtimme]=useState(0);
const intervalidRef=useRef(null);
const startTimeRef= useRef(0);

useEffect(()=>{
     if(isRunning){
       intervalidRef.current= setInterval(()=>{

            setElaspasedtimme(Date.now()-startTimeRef.current)
            
        },10);

        return (()=>{
            clearInterval(intervalidRef.current)
        })
     } 

},[isRunning]);

function start(){
    setisRuunning(true);
    startTimeRef.current=Date.now();
    console.log(startTimeRef);

}
function stop(){
 setisRuunning(false);
}
function reset(){
     setElaspasedtimme(0);
     setisRuunning(false);
}


function padding(){
    let min=Math.floor(elapstime/(1000*60)%60);
    let sec=Math.floor(elapstime/(1000)%60);
    let msec=Math.floor((elapstime%1000)/10);
    return `${min}:${sec}:${msec}`;
}
return(<>
         <h1 className={style.h1}>{padding()}</h1>
         <button onClick={start}>Start</button><button onClick={stop}>stop</button>
         <button onClick={reset}>reset</button>
</>)
}
export default Stopwatch;