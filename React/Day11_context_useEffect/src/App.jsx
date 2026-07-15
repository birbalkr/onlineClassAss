
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { ContextProvider, MyStore } from './context/MyContext';

function App() {
  console.log("app rendering......");

  return (
    <div>
      <ContextProvider>
        <Home />
      </ContextProvider>
      <About />
      <Contact />
    </div>
  )
}

export default App