import {useState, createContext, useContext} from 'react';
import Child from "./Child";
export const UserContext = createContext();
export default function App12() { 
    const [user, setUser] = useState("john");
    const [email, setEmail] = useState("john@gmail.com")
  return (
    <div>
        <UserContext.Provider value ={{user, email}}>
            <h2>Hello {user} from App13 component</h2>
            <Child/>
            </UserContext.Provider>
    </div>
  )
}
