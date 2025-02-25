import React ,{useState} from 'react';

function Mycomponent(){
    
    const [food,setFoods]=useState(["apple","orange","banana",          "strawberry"]);
 

    function handelAddfood(event){
            const foodname=document.querySelector("#foodname").value;
            console.log(foodname);
            
            setFoods(f=>[...f,foodname]);
            document.querySelector("#foodname").value="";
            //spreads the elemtns like 
            //apple ,orange,banana
           
            
    }
    function removeFood(index){
                   setFoods(food.filter((_,i)=>i!=index));
    }
   
    return (
        <>
        <div>
            <h1>list of foods</h1>
            <ul>
                {food.map((food,index)=><li key={index} onClick={()=>removeFood(index)} >{food}</li>)}
            </ul>
            <input type='text' placeholder='enter food name' id="foodname" input/><button  onClick={handelAddfood}>add</button>
        </div>
        
        </>
    );
}

export default Mycomponent;