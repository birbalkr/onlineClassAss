import { useState } from 'react';
import './App.css'
import SignUp from './components/signUp'
import Usercard from './components/Usercard';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="bg-gray-300 h-screen">
      <SignUp setUsers={setUsers} />

      <div className="flex gap-4">
        {users.map((elem) => (
          <Usercard user={elem} />
        ))}
      </div>
    </div>
  )
}

export default App
