import {UserContext} from './App12'
import { useContext } from 'react'
export default function Child() {
    const {user, email} = useContext(UserContext);
  return (
    <div>
        <h2>Hello {user} from Child component</h2>
    </div>
  );
}
