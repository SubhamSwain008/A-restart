import style from './todolist.module.css'
import React, {useState} from 'react';


function Todolist(){

     const [taskslist,setTasklist]=useState(["brush teeth","eat breakfast"]);
    
    


     function addTolist(){
         const taskname=document.querySelector('#inputtext').value;
         console.log(taskname);
         if(taskname==""){
            alert("please enter a task");
         }else{
        
         setTasklist(t=>[...t,taskname]);}
         document.querySelector('#inputtext').value="";
     }
     function addToliste(event){
        if(event.key=="Enter"){
        const taskname=document.querySelector('#inputtext').value;
        console.log(taskname);
        if(taskname==""){
           alert("please enter a task");
        }else{
       
        setTasklist(t=>[...t,taskname]);}
        document.querySelector('#inputtext').value="";
        }
    }
     function removeTask(index){
        console.log(index);
        setTasklist(taskslist.filter((_,i)=>i!==index));
       
     }
     function moveThetaskup(index){
          console.log(`task up ${index}`);
        if(index>0){
          setTasklist((prevTasks) => {
            const newTasks = [...prevTasks]; 
            [newTasks[index], newTasks[index - 1]] = [newTasks[index - 1], newTasks[index]]; 
            return newTasks;
        });}else{
            alert("It's the top most task");
        }
     }
     function moveThetaskdown(index){
        console.log(taskslist.length);
     if(index<taskslist.length-1){
        setTasklist((prevTasks) => {
            const newTasks = [...prevTasks];  
            [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]]; 
            return newTasks;
        });}else{
            alert("It's the bottom most task");}
     }
     const[completed,setComplete]=useState([]);
     function completeTask(index){
        const done=taskslist[index];
        const hours=new Date().getHours();
        const mins=new Date().getMinutes();
        const date=`${hours}:${mins}`;
         setComplete(c=>[...c,done+`" ===>`+`task was completed at (${date})`]);
         setTasklist(taskslist.filter((_,i)=>i!==index));
     }



     return (
             <>
             <h1 className={style.Heading}>TO-DO-LIST</h1>
             <div className={style.body1}>
             <input className={style.in} placeholder='enter the task' id='inputtext' onKeyDown={(e)=>addToliste(e)}></input>
             <button className={style.buttonsc}  onClick={()=>addTolist()}>➕</button>
             <h2 className={style.Heading2}>Task to do <br/><div className={style.smol}>(pending {taskslist.length})</div></h2>
             <div>
                {taskslist.map((_,index)=><li key={index}className={style.list}><button className={style.buttona} onClick={()=>moveThetaskup(index)}>
                        ⬆️
                        </button><button className={style.buttona}  onClick={()=>moveThetaskdown(index)}>
                        ⬇️
                        </button>{taskslist[index]}
                    <button className={style.buttonsc}  onClick={()=>removeTask(index)}>
                        ❌
                        </button><button className={style.buttonst}  onClick={()=>completeTask(index)}>
                        ✔️
                        </button></li> )}
             </div>
             <h2 className={style.Heading2}>Task done</h2>
             <ul className={style.inner}>
                {completed.map((_,index)=><li key={index} className={style.list2}>{`"`+completed[index]}</li>)}
             </ul></div>
             
             </>
     );

}
export default Todolist;