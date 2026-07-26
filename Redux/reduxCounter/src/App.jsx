import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/features/counterSlice'
import { useState } from 'react'

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.conter.value)
  const [num, setNum] = useState(5)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => { dispatch(increment()) }}>Increment</button>
      <button onClick={() => { dispatch(decrement()) }}>Decrement</button>
      <input type="number"
        value={num}
        onChange={(e) => {
          console.log(e.target.value);
          setNum(Number(e.target.value))

        }} />
      <button onClick={() => { dispatch(incrementByAmount(num)) }}>Increment by input</button>
    </div>
  )
}

export default App
