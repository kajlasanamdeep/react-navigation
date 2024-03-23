import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import MyNavbar from '../../Components/Navbar'

function AuthLayout() {
    let isLogin = localStorage.getItem("user")
    console.log(isLogin);
    if (!isLogin) {
        return <Navigate to="/" state={JSON.parse(isLogin)} />
    }
    return (
        <div>
            <MyNavbar />
            <Outlet />
        </div>
    )
}

export default AuthLayout
