
import { useState } from 'react'
import Count from './count'
import InputValue from './inputValue'
import LoginScreen from './LoginScreen'
import Signup from './Signup'
function App() {
  const [toggle, setToggle] = useState(false)

  return (
   <>
  {toggle ? <LoginScreen /> : <Signup />}
   </>
  )
}

export default App
