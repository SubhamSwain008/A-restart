import Greeting from "./greetings.jsx"
import List from "./list.jsx";
import Button from "./button.jsx";
import MyComponents from "./usestate.jsx";
import Counter from "./counter.jsx";
import Onchange from "./onChange.jsx";
import Colorpick from "./colorpicker.jsx";
import Updatero from "./updaterFun.jsx";
import Car from "./car.jsx";

function App() {
  // const name1=prompt("Whats ur name ?");
  // const userpass=prompt("enter password !");
  // let x=false;
  // if (userpass==123){
  //      x=true;
  
    
    return ( 
    <>
    {/* <Greeting isUserLogedin={x} userName={name1} /> */}
    {/* <List/>
    <Button name={name1}/> */}

    {/* <MyComponents />
    <Counter /> */}
    {/* <Onchange /> */}


    {/* <Colorpick /> */}
    {/* <Updatero /> */}
    <Car />
    </>
    );
  // }else{
  //   return(
  //     <h1>Wrong password</h1>
  //   );
  // }
}

export default App
