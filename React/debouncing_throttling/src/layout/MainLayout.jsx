import React from 'react'
import { Outlet, NavLink } from 'react-router';
function MainLayout() {
    return (
        <div>
            <nav style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default MainLayout
