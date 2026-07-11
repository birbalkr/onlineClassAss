import { useState } from "react"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import UserCard from "./components/UserCard"

function App() {
  const [togggle, setTogggle] = useState(false)
  const [userData, setUserData] = useState([])

  return (
    <div className="p-2 h-screen">
      <Navbar setTogggle={setTogggle} />

      {togggle

        ? <div className="grid grid-cols-4">
          {userData.map((users, index) => (
            <UserCard key={index} users={users} />
          ))}
        </div> :
        <div className="flex justify-center h-[70%] items-center">
          <Form setUserData={setUserData} setTogggle={setTogggle} />
        </div>}
    </div>

  )
}

export default App
