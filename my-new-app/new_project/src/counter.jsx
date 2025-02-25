import React, {useState} from 'react';

function Counter(){


       const [count,setCount]=useState(0);

        const increment=()=>{
              setCount(count+1);
        }

        const decrement=()=>{
            if(count>0){setCount(count-1);}
            else{
                alert("counter is at zero");
            }
            
        }
        const rest=()=>{
            setCount(0);
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
export default Counter;