import React ,{useState} from 'react';

function Colorpick(){
     
    const[color,setColor]=useState('#FFFFFF');
    
    function changeColor(Event){
           
        setColor(Event.target.value);
    }

    return(
        <><div style={{backgroundColor:color,padding:"100px"}}>{color}</div>
        <label>Select a color : </label>
        <input type='color' value={color} onChange={changeColor}></input>

        </>
    )
}
export default Colorpick;