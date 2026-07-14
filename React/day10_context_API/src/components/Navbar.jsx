import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-4 bg-gray-200'>
            <div>logo</div>
            <div>
                <p>Home</p>
                <p>Cart</p>
            </div>
            <button>Login</button>
        </div>
    )
}

export default Navbar
