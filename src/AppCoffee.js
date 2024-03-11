import React from 'react'
import './App.css'
import img1 from './Assets/coffe1.jpeg'
import img2 from './Assets/coffee2.jpeg'
import img3 from './Assets/sandwich.jpeg'

export default function AppCoffee() {
    return (
      <div>
        <h1>Starbucks</h1>
        
        <hr></hr>
      <div className='container'>
          <div className='s'>
              <img src={img1}></img>
              <br></br>
              <h3>Coffe1</h3>
              <h3>price : 300</h3>
              <h3>Description:"Rich in flavour, full-bodied espresso with hot water in true."</h3>
              <button>Add</button>
              
          </div>
          <div className='a'>
              <img src={img2}></img>
              <br></br>
              <h3>Coffee2</h3>
              <h3>price : 300</h3>
              <h3>Description:"Our signature rich in flavour espresso blended with delicate..."</h3>
              <button>Add</button>
             
          </div>
          <div className='f'>
              <img src={img3}></img>
              <br></br>
              <h3>sandwich</h3>
              <h3>price : 300</h3>
              <h3>Description:"Tasty and spicy"</h3>
              <button>Add</button>
          </div>
          </div>
      </div>
    )
  }
