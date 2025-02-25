import React, {useState} from 'react';

function Updatero(){

         const [count,setCount]=useState(0);
    
            const increment=()=>{
                // now the function will run 3 timess at once
                //here the arow function acts as an updater function
                  setCount(c=>c+1);
                  setCount(c=>c+1);
                  setCount(c=>c+1);
            }
    
            const decrement=()=>{
                if(count>0){setCount(c=>c-1);}
                else{
                    alert("counter is at zero");
                }
                
            }
            const rest=()=>{
                setCount(c=>c=0);
            }
           
            return(
                <>
                <div>{count}</div>
                <button className="work1"onClick={increment}>increment</button>
                <button className="work2" onClick={decrement}>decrement</button>
                <button className="work3" onClick={rest}>reset</button>
                </>
            )
}
export default Updatero;