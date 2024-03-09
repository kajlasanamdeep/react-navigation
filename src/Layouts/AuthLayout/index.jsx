import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import MyNavbar from '../../Components/Navbar'

function AuthLayout() {
    let isLogin = localStorage.getItem("isLogin")
    console.log(isLogin);
    if (!isLogin) {
       return <Navigate to="/" />
    }
    return (
        <div>
            <MyNavbar />
            <Outlet />
        </div>
    )
}

export default AuthLayout
