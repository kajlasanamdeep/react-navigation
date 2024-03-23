import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context'
function MyNavbar() {
    const { setShowSignUpModal } = useContext(UserContext)
    const openSignup = () => {
        setShowSignUpModal(true)
    }
    return (
        <div className="header">
            <div className="container-fluid">
                <Link to="/"><h1 className="brand"><span>N+</span></h1></Link>
                <ul className="nav-items">
                    <li><Link to={'/#offers'}>Offers</Link></li>
                    <li><Link>Services</Link></li>
                    <li><Link>Team</Link></li>
                    <li><Link>Contact</Link></li>
                    <li><Link className="sign-up" onClick={openSignup}>Sign Up</Link></li>
                </ul>
            </div>
        </div>)
}

export default MyNavbar
