import React from 'react'
import './profile.css'
import { useLocation, useNavigate } from 'react-router-dom'
function Profile() {
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state;
    return (
        <div className='main'>
            <div class="navbar-top">
                <div class="title">
                    <h1>Profile</h1>
                </div>
                <ul>
                    <li>
                        <span className='sign-out' onClick={() => {
                            localStorage.setItem('user', '')
                            navigate('/')
                        }}>
                            Log out
                        </span>
                    </li>
                </ul>
            </div>
            <div class="main">
                <div class="card">
                    <div class="card-body">
                        <i class="fa fa-pen fa-xs edit"></i>
                        <table>
                            <tbody>
                                <tr>
                                    <td>First Name</td>
                                    <td>:</td>
                                    <td>{user?.firstName}</td>
                                </tr>
                                <tr>
                                    <td>Last Name</td>
                                    <td>:</td>
                                    <td>{user?.lastName}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>:</td>
                                    <td>{user?.email}</td>
                                </tr>
                                <tr>
                                    <td>Password </td>
                                    <td>:</td>
                                    <td>{user?.password}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
