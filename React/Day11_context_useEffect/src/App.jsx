
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { useEffect, useState } from 'react';

function App() {
  console.log("app rendering......");
  useEffect(() => {
    console.log("UseEffect rendering.......");
  }, [])

  // [] run only once when the component is mounted
  // 'count' is a state variable, setCount is a function to update the state variable

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