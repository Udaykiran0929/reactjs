import React from 'react'
import {UserContext} from './App20'
import Home1 from './Home1'
import Register1 from './Register1'
export default function Login1() { 
    const {flag, setFlag} = useContext(UserContext);
    if (flag ==1) {
        <Home1/>
    } else if (flag == 2) {
        <Register1/>
    }
  return (
    <div>
        Login1
        <button onClick={() => setFlag((prev) => 1)}>Login</button>
        <button onClick={() => setFlag((prev) => 2)}>Create Account</button>
        {console.log(flag)}
    </div>
  )
}
