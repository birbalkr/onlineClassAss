import React from 'react'
import { Outlet } from 'react-router'

function PublicProtected() {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default PublicProtected
