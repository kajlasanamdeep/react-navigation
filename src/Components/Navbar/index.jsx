import React from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import users from '../../users.json';
function MyNavbar() {
    const navigate = useNavigate()
    let isLogin = localStorage.getItem("isLogin")
    const handleLogin = () => {
        const name = prompt("Enter Your Name :");
        const user = users.find((user) => user.name === name);
        if (user) {
            localStorage.setItem('isLogin', true)
            navigate('/profile/' + user.id)
        }else{
            alert('Invalid User !')
        }
    }
    const handleLogout = () => {
        localStorage.clear()
        navigate('/')
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About US</Link>
                        </li>
                        <li className="nav-item">
                            {
                                !isLogin ?
                                    <Button className="nav-link" onClick={handleLogin}>Login</Button>
                                    :
                                    <Link className="nav-link" to="/profile">My Profile</Link>
                            }
                        </li>
                        {isLogin && <li className="nav-item">
                            <Button variant='danger' className="nav-link" onClick={handleLogout}>Logout</Button>
                        </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>)
}

export default MyNavbar
