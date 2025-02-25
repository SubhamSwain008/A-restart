function Greeting(props){

       if(props.isUserLogedin){
           
          return (<pre><h1>Welcome {props.userName} !</h1></pre>);
       }
       else {
           return(<h1>enter right password!</h1>);
       }
}

export default Greeting; 