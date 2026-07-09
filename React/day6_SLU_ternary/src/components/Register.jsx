import React, { useState } from 'react'

function Register({ setToggle, setSaveUser }) {
    const [userData, setUserData] = useState({});
    
    const handleChange = (e) => {
        const {name,value} = e.target;
        setUserData(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        setSaveUser(prev => [...prev, userData]);
        
    }
    return (
        <div className='bg-white w-90 flex flex-col gap-4 p-4 rounded-md shadow-md '>
            <h1>Register</h1>
            <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <input onChange={handleChange} name='name' type="text" placeholder='Name' className='border rounded-lg p-3' />
                <input onChange={handleChange} name='email' type="text" placeholder='Email' className='border rounded-lg p-3' />
                <input onChange={handleChange}name='passwd' type="password" placeholder='Password' className='border rounded-lg p-3' />
                <button className='p-3 bg-blue-600 text-white rounded-xl' >Login</button>
            </form>
            <p>Allready have a account? <span className='text-blue-600 cursor-pointer' onClick={() => setToggle(prev=>!prev)}>Login here</span></p>
        </div>
    )
}

export default Register