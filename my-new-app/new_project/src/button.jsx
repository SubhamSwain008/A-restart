import style from './button.module.css'
function Button(props){
    let counter =0;
    const clicking=(e)=>{
          counter++;
          alert(`fuck you ${props.name}`)
          e.target.style.display='none';
    };
   

    return (
      <button className={style.button} onClick={(e)=>clicking(e)}>
        Clickme 🥺
      </button>
    );
}

export default Button;