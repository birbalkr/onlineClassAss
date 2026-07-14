import { useState } from "react"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import UserCard from "./components/UserCard"

function App() {
  const [togggle, setTogggle] = useState(true)
  const [userData, setUserData] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  })

  const handleDelete = (id) => {
    let filteredData = userData.filter((user) => id !== user.id);
    setUserData(filteredData);
    localStorage.setItem("users", JSON.stringify(filteredData));
  }

  // update data 
  const [updatedData, setUpdatedData] = useState(null);

  return (
    <div className="p-2 h-screen">
      <Navbar setTogggle={setTogggle} />

      {togggle

        ? <div className="grid grid-cols-4">
          {userData.map((elem) => (
            <UserCard key={elem.id} setTogggle={setTogggle} setUpdatedData={setUpdatedData} del={handleDelete} users={elem} />
          ))}
        </div> :
        <div className="flex justify-center h-[70%] items-center">
          <Form updatedData={updatedData} users={userData} setUserData={setUserData} setTogggle={setTogggle} />
        </div>}
    </div>

  )
}

export default App
