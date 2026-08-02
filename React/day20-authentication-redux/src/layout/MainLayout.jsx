import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

function MainLayout() {
    return (
        <div className='p-2 h-screen bg-black text-white'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default MainLayout
