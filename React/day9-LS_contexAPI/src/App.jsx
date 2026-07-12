import { useState } from "react"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import UserCard from "./components/UserCard"

function App() {
  const [togggle, setTogggle] = useState(true)
  const [userData, setUserData] = useState([])
  let data = JSON.parse(localStorage.getItem("users"))


  return (
    <div className="p-2 h-screen">
      <Navbar setTogggle={setTogggle} />

      {togggle

        ? <div className="grid grid-cols-4">
          {data.map((users, index) => (
            <UserCard key={index} users={users} />
          ))}
        </div> :
        <div className="flex justify-center h-[70%] items-center">
          <Form users={userData} setUserData={setUserData} setTogggle={setTogggle} />
        </div>}
    </div>

  )
}

export default App
