import React from 'react'
import {useEffect, useState} from 'react';
export default function Feeds() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount((prev) => prev + 1);
        console.log("Count increment and component Updated")
    };

    const decrement = () => {
        setCount((prev) => prev - 1 );
        console.log("Count decrement and component Updated")
    };
    useEffect(() => {
        console.log("Feeds Component Mounted", Date());
        return() => {
            console.log("Feeds Component Unmounted");
        };
    },[]);
  return (
    <div>
        <h2>Counter</h2>
        <button onClick={() => decrement()}>-</button>
        {count}
        <button onClick={() => increment()}>+</button>
    </div>
  );
}
