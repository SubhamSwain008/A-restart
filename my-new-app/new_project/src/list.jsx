
function List(){
  const fruits= [
    { name: "Apple", cal: 52 },
    { name: "Banana", cal: 89 },
    { name: "Orange", cal: 47 },
    { name: "Mango", cal: 60 }
];
fruits.sort();

  const listitems=fruits.map(fruits=><li key={fruits.name}>{fruits.name}'s  calories : {fruits.cal} </li>);

  return(<ol>{listitems}</ol>);


}
export default List;