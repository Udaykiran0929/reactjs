import {UserContext} from './App20'
import {useContext}  from 'react'

export default function Childa() {
    const {user, setUser} = useContext(UserContext);
  return (
    <div>
        <h2>Hello {user} froom Child component</h2>
        <button onClick={() => setUser }>Change to Cathy</button>1
    </div>
  );
}
