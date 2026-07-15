import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext';

function Home() {
    let { count, setCount } = useContext(MyStore);
    console.log("home rendering.......");

    return (
        <>
            <div>Home {count}</div>
            <button onClick={() => setCount(count + 1)}>+1</button></>
    )
}

export default Home