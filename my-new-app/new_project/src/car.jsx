import React, {useState} from 'react';

//passing objects in useSate
function Car(){
   
    const [car,setCar]=useState({
                                 name:"ford",
                                 model:"Gt mustang",
                                 year:"2000"
                                });
    const changeName=(e)=>{
               console.log(e.target.value);
               setCar(car=>({...car, name : e.target.value}));
               //creates a new object keeping properties of old ones
    }
    const changeModel=(e)=>{
        console.log(e.target.value);
        setCar(car=>({...car, model: e.target.value}));
}
const changeYear=(e)=>{
    console.log(e.target.value);
    setCar(car=>({...car, year: parseInt(e.target.value)}));
}
    return (
        <>
           <p>Your car details are <br/>
            name: {car.name}<br/>
            model: {car.model}<br/>
            year: {car.year}

            </p>
            <input type='text' value={car.name} onChange={(e)=>changeName(e)}></input>
            <br/>
            <input type='text' value={car.model} onChange={(e)=>changeModel(e)}></input><br/>
            <input type='number' value={car.year} onChange={(e)=>changeYear(e)}></input>
        </>
    )
      
}
export default Car;