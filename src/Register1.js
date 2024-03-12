import React from 'react'
import Home1 from './Home1'
import { UserContext } from './App20'
export default function Register1() {
    const {flag, setFlag} = useContext(UserContext);
  return (
    <div>
        Register1
       <button onClick={() => setFlag((prevState) => 1)}>
        Submit
       </button>
    </div>
  )
}
