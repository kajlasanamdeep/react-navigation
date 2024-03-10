import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <h4>&copy; Negative Space</h4>
                        <address>
                            3200 Broadway Ave,<br />
                            Santa Monica, CA<br />
                            310-111-1111
                        </address>
                    </div>
                    <div className="col-sm-9 text-right">
                        <ul className="list-unstyled list-inline">
                            <li><Link>About</Link></li>
                            <li><Link>Contact</Link></li>
                            <li><Link>Jobs</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
