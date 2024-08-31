import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Navabar />
            <Outlet />
        </>
    )
}

export default Layout