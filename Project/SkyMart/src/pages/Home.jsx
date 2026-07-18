import React from 'react'
import { Navigate } from 'react-router';

function Home() {
    const logoutuser = () => {
        let user = JSON.parse(localStorage.getItem('user'))
        localStorage.setItem('user', JSON.stringify({ ...user, isLogin: false }))
        window.location.href = "/login"
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={logoutuser}>logout</button>
        </div>
    )
}

export default Home
