import React from 'react'
import MyNavbar from '../../Components/Navbar'
import { Outlet } from 'react-router-dom'

function CommonLayout() {
    return (
        <div>
            <MyNavbar />
            <Outlet />
        </div>
    )
}

export default CommonLayout
