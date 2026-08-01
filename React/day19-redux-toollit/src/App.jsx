import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/CounterSlice'

function App() {

  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.count)

  return (
    <div>
      <h1>Redux toolKit</h1>
      <h3> {count} </h3>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}

export default App
