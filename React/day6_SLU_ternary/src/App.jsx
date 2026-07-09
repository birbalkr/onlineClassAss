
import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [toggle, setToggle] = useState(false)
  const [saveUser, setSaveUser] = useState([]);
  console.log(saveUser);
  

  return (
    <div className='bg-gray-400 h-screen flex justify-center items-center'>
      {toggle ? <Login setToggle={setToggle} /> : <Register setToggle={setToggle} setSaveUser={setSaveUser}/>}
    </div>
  )
}

export default App
