import React ,{useState} from 'react';

function Car(){
   
    const [cars,setCar]=useState([]);
    const date=new Date().getFullYear;
    
    const [year,SetYear]=useState(parseInt(date));

    const[brand,setBrand]=useState("Tata");

    const[model,setModel]=useState("nano");
    
    function addCar(){
        const newCar={name:brand+" "+model,year:parseInt(year)}
        console.log(newCar);
        setCar(c=>[...c,newCar]);
    }

    function carYear(event){
        SetYear(y=>y=event.target.value);
    }

    function carBreand(event){

        setBrand(b=>b=event.target.value);

    }

    function carModel(event){
        setBrand(m=>m=event.target.value);
    }
    function removeCar(index){
        
        setCar(cars.filter((_,idx)=>idx!==index))
          
    }
    return(
               <>
               <input type="text" placeholder='car brand' onChange={(e)=>carBreand(e)}/><br/>
               <input type="text" placeholder='car model' onChange={(e)=>carModel(e)}/><br/>
                <input type="text" placeholder={date} onChange={(e)=>carYear(e)}/><br/>
                <button onClick={addCar}>submit</button>

                <ul>
                  {cars.map((car,index)=><li key={index} onClick={()=>removeCar(index)}>{car.name}, {car.year}</li>)}
               </ul>
               </>);



}
export default Car;