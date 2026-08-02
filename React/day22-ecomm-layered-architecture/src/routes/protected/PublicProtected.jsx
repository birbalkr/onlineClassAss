import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

function PublicProtected() {
    let { isAuthenticated, user, isLoading } = useSelector((store) => store.auth)
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (user) {
        return <Navigate to={"/main"} />
    }
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default PublicProtected
