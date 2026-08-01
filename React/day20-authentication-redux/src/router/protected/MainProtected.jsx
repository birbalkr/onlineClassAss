import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

function MainProtected() {
    let { user } = useSelector((store) => store.auth)

    if (!user) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default MainProtected
