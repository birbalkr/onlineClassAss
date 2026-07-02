import React, { useState } from 'react'

function InputValue() {
    // BurteForce 
    // const [username, setUsername] = useState("");
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");


    const [formData, setformData] = useState({
        username:"",
        name:"",
        email:""
    })

    console.log(formData);
    

    return (
        <div className='flex justify-center items-center h-screen flex-col gap-4'>
            <div className='flex flex-col gap-2 border-2 border-black p-4 rounded-2xl justify-center items-center'>
                <div>User Data Input</div>
                <input type="text" onChange={(e)=>{ setformData({...formData, username:e.target.value})}} placeholder='Enter your username' className='border-2 border-black p-2 m-2' />
                <input type="text" onChange={(e)=>{ setformData({...formData, name:e.target.value})}}  placeholder='Enter your name' className='border-2 border-black p-2 m-2' />
                <input type="text" onChange={(e)=>{ setformData({...formData, email:e.target.value})}} placeholder='Enter your email' className='border-2 border-black p-2 m-2' />
                <button className='bg-blue-500 text-white px-4 py-2 rounded'>Submit</button>
            </div>

            {/* print all data page bruteforce */}
            <div className='flex flex-col gap-2 border-2 border-black p-4 rounded-2xl justify-center items-center'>
                <div className='text-2xl'>User Data Output</div>
                {/* <h1>Username: {username}</h1> */}
                <h1></h1>
                {/* <h1>Email: {email}</h1> */}
            </div>
        </div>
    )
}

export default InputValue