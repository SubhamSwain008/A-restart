import style from './app.module.css'
import React ,{useState,useEffect,useRef} from 'react';

function p(str){
    console.log(str);
}

function Calcu(){
    
    const [display,setDisplay]=useState(0);
    let [display2,setDisplay2]=useState("");
    const[display3,setDisplay3]=useState(0);
    const[display4,setDisplay4]=useState(0);
    function clear(){
       setDisplay(0);
       setDisplay2("");
       setDisplay3(0);
       setDisplay4(0);
       
    }
    useEffect(()=>{
              if(display==0 && display3==0){
                const dis1=document.getElementById('dis1');
                console.log(dis1);
                dis1.style.color='gray';
              }
              else if(display==0 || display3!=0){
                const dis1=document.getElementById('dis1');
                console.log(dis1);
                dis1.style.color='bisque';
              }
              else if(display!=0 || display3==0){
                const dis1=document.getElementById('dis1');
                console.log(dis1);
                dis1.style.color='bisque';
              }
             else{
                const dis1=document.getElementById('dis1');
                console.log(dis1);
                dis1.style.color='bisque';
             }


              
    },[display])
    
    function getValue(id){
        const val=id.target.innerText;
        if(display2==""){   
         if(display==0 &&(val!="+"&&val!="-"&&val!="x"&&val!="/"&&val!="%")){
                  const valf=parseFloat(val);
                  console.log(valf,"1st if");
                  setDisplay(valf)
         }
         else if(val!="+"&&val!="-"&&val!="x"&&val!="/"&&val!="%"){
            let valf=parseFloat(val);
          
            valf=((display*10)+valf)
            setDisplay(valf);
            p(valf);
            p("2nd");
           
         }
         else{
           if(display2==""){
           
            setDisplay2(val.toString()); 
           
           }
           
                
         }
        }else if(["+", "-", "x", "/", "%"].includes(val)){
            setDisplay2(val);
           
        }else{

            if(display3==0 &&(val!="+"&&val!="-"&&val!="x"&&val!="/"&&val!="%")){
                const valf=parseFloat(val);
                console.log(valf,"1st if");
                setDisplay3(valf)
       }
       else if(val!="+"&&val!="-"&&val!="x"&&val!="/"&&val!="%"){
          let valf=parseFloat(val);
        
          valf=((display3*10)+valf)
          setDisplay3(valf);
          p(valf);
          p("2nd");
         
       }

           }




    }

    function calculate(){
        console.log(display2.toString());
        const ca=display2.toString();
        switch (ca) {
            case "+":
                setDisplay4(display + display3);
                break;
            case "-":
                setDisplay4(display - display3);
                break;
            case "x":
                setDisplay4(display * display3);
                break;
            case "/":
                setDisplay4(display3 !== 0 ? display / display3 : "Error");
                break;
            case "%":
                setDisplay4(display % display3);
                break;
            default:
                console.log("Invalid operation");
        }
        

    }

   

    return (
        <>
        <div id='dis1' className={style.display}onClick={()=>setDisplay(0)}>{display}
        <div className={style.display2} onClick={()=>setDisplay2("")}>{display2}</div>
        <div className={style.display3} onClick={()=>setDisplay3(0)}>{display3}</div>
        <div className={style.display4}>{display4}</div>
        </div>
     <div className={style.buttons}>
<button className={style.button} id="1" onClick={(id)=>getValue(id)}>1</button>
     <button className={style.button} id="2" onClick={(id)=>getValue(id)}>2</button>
     <button className={style.button} id="3" onClick={(id)=>getValue(id)}>3</button>
     <button className={style.button} id="4" onClick={(id)=>getValue(id)}>4</button>
     <button className={style.button} id="5" onClick={(id)=>getValue(id)}>5</button>
     <button className={style.button} id="6" onClick={(id)=>getValue(id)}>6</button>
     <button className={style.button} id="7" onClick={(id)=>getValue(id)}>7</button>
     <button className={style.button} id="8" onClick={(id)=>getValue(id)}>8</button>
     <button className={style.button} id="9" onClick={(id)=>getValue(id)}>9</button>
    
     <button className={style.button} id="+" onClick={(id)=>getValue(id)}>+</button>
     <button className={style.button} id="0" onClick={(id)=>getValue(id)}>0</button>
     <button className={style.button} id="-" onClick={(id)=>getValue(id)}>-</button>
    
     <button className={style.button} id="/" onClick={(id)=>getValue(id)}>/</button>
     <button className={style.button} id="*" onClick={(id)=>getValue(id)}>x</button>
     <button className={style.button} id="%" onClick={(id)=>getValue(id)}>%</button>
     <button className={style.button} id="dot" onClick={(id)=>getValue(id)}>.</button>
     <button className={style.button} id="C" onClick={(e)=>clear()}>C</button>
     <button className={style.button} id="=" onClick={()=>calculate()}>=</button>
     
     </div></>
    )
}
export default Calcu;