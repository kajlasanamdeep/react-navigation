import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <div className="section section--alt" id="get-started">
            <div className="container">
                <h2 className="heading">Here is what we offer:</h2>
                <div className="row">
                    <div className="col-sm-4">
                        <h3>Innovations.</h3>
                        <p>We come up with ideas all the time. We just need billions of dollars from you first. Then - profit!</p>

                        <Link className="btn">Learn More</Link>
                    </div>
                    <div className="col-sm-4">
                        <h3>Relationships.</h3>
                        <p>We are anti-social. We won't talk to you. Ever. We won't annoy you with status updates. That's why we are perfect communicators!</p>
                        <Link className="btn">Learn More</Link>
                    </div>
                    <div className="col-sm-4">
                        <h3>Latest Technology.</h3>
                        <p>We use latest technology. We don't waste a single second on a day-old framework. Who cares if it's buggy as long as it's new and cool, amiright?</p>
                        <Link className="btn">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>)
}

export default Banner
