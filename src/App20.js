import {useState, createContext, useContext} from 'react'
import Childa from './Childa'
export const UserContext = createContext();
export default function App20() {
    const [user, setUser] = useState('john');
  return (
    <div>
        <UserContext.Provider value = {{user, setUser}} >
            <h2>Hello {user} from App20 component</h2>
            <Childa/>
        </UserContext.Provider>
    </div>
  );
}
