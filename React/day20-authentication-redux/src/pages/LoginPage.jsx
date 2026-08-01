import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue } from '../features/counterSlice';

function LoginPage() {
    const [inputValue, setInputValue] = useState();

    let dispatch = useDispatch();
    let { count } = useSelector((store) => store.counter);
    return (
        <div>
            <h4>Count: {count}</h4>
            <input type="text" placeholder='enter count value' onChange={(e) => setInputValue(e.target.value)} />
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(incrementByValue(inputValue))}>IncrementByValue</button>
            </div>
        </div>
    )
}

export default LoginPage
