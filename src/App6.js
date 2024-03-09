import React from 'react'
export default function App6() {
    let names = ["john", "Cathy", "Mike"];
    let products = [
        {id:1, name:"product 1", price:440},
        {id:2, name:"product 2", price:780},
        {id:3, name:"product 3", price:560},
    ]
  return (
 <ul>
     {names.map ((e,i) => (
        <li key ={i} >{e.name} - {e.price}</li>
     ))}
 </ul>
  );
}
