import { Route, Routes } from "react-router-dom";
import HomPage from "./components/HomPage";
import Collection from "./components/Collection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomPage />} />
      <Route path='/collection' element={<Collection />} />
    </Routes>
  )
}

export default App
