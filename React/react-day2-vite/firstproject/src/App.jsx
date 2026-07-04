
import { useState } from 'react'
import Signup from './Signup'
import Usercard from './Usercard'
function App() {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);

  return (
    <div className="bg-gray-300 h-screen">
      <Signup setUsers={setUsers} setToggle={setToggle} />

      <div className="flex gap-4">
        {users.map((elem) => (
          <Usercard user={elem} />
        ))}
      </div>
    </div>
  );
};

export default App
