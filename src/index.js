import React from 'react';
import ReactDOM from 'react-dom/client';
import App18 from './App18';
import App19 from './App19';
import AppCoffee from './AppCoffee'
// import './index.css';    

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     {/* <App4 Students={{name:"john", age:23}}/> */}
     <AppCoffee/>
  </React.StrictMode>
);

 