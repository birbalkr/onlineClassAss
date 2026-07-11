import React from 'react'

function Navbar({ setTogggle }) {
    return (
        <div className='p-4 flex justify-between items-center bg-gray-200'>
            <img src="https://cdn-icons-png.flaticon.com/128/456/456212.png" alt="Logo" className='w-8 h-8 rounded-full bg-white p-2' />
            <div className='flex gap-4'>
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={() => setTogggle((prev) => !prev)}>Create</button>
        </div>
    )
}

export default Navbar