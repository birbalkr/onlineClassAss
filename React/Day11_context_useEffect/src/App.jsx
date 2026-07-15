
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  console.log("app rendering......");
  useEffect(() => {
    console.log("UseEffect rendering.......");
  }, [])

  // [] run only once when the component is mounted
  // 'count' is a state variable, setCount is a function to update the state variable

  let getData = async () => {
    let res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(res.data);
  }
  console.log(getData());


  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <ContextProvider>
        <Home />
      </ContextProvider> */}
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Home />
      <About />
      <Contact />
    </div>
  )
}

export default App