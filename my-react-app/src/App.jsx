import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./food.jsx";
import Card from "./card.jsx";
import Button from "./button/button.jsx";
import Button2 from "./inlineButton.jsx";
import Student from "./students/student.jsx";

function App() {
      return(
       <>
       <Header />
       <Food />
       <Card />
       <br/>
       <Student img="https://media-ccu2-1.cdn.whatsapp.net/v/t61.24694-24/473396423_647855304474443_6467337942517741236_n.jpg?ccb=11-4&oh=01_Q5AaIDnDXGW1stDl5qVZFRU-JsCRie6Pr1pPKp14HPs7S8uo&oe=67C77BDF&_nc_sid=5e03e0&_nc_cat=111" name="subham" age={21} roll={102} />
       <Student img="https://media-ccu2-1.cdn.whatsapp.net/v/t61.24694-24/473396377_1156454709609451_8479144397118231719_n.jpg?ccb=11-4&oh=01_Q5AaIL7LSWXEz-W8E3Husy3Lctjs9ggt1otglHav-XGw0mOd&oe=67C78591&_nc_sid=5e03e0&_nc_cat=107" name="suvankar" age={20} roll={109} />

       <Student/>
       <Student/>

       <hr />
       <Footer />
       
       </>
      );
}

export default App
