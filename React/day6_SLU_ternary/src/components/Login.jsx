import React from 'react'

function Login({setToggle}) {
    return (
        <div className='bg-white w-90 flex flex-col gap-4 p-4 rounded-md shadow-md '>
            <h1>Login</h1>
            <form action="" className='flex flex-col gap-4'>
                <input type="text" placeholder='Email' className='border rounded-lg p-3' />
                <input type="password" placeholder='Password' className='border rounded-lg p-3' />
                <button className='p-3 bg-blue-600 text-white rounded-xl'>Login</button>
            </form>
            <p>Don't have a account? <span className='text-blue-600 cursor-pointer' onClick={()=>setToggle(prv=>!prv)}>Register here</span></p>
        </div>
    )
}

export default Login