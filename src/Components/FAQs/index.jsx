import React from 'react'

function FAQs() {
    return (
        <div className="section">
            <div className="container">
                <h2 className="heading">Questions?</h2>
                <div className="accordion">

                    <div className="accordion__item">
                        <input type="radio" name="accordion" id="accordion1" />
                        <label for="accordion1">What is your typical project cost?</label>
                        <div className="accordion__content">
                            <p>A lot. If you are not a billionaire don't even bother asking.</p>
                        </div>
                    </div>
                    <div className="accordion__item">
                        <input type="radio" name="accordion" id="accordion2" />
                        <label for="accordion2">How can I reach you?</label>
                        <div className="accordion__content">
                            <p>Don't. Thanks.</p>
                        </div>
                    </div>
                    <div className="accordion__item">
                        <input type="radio" name="accordion" id="accordion3" />
                        <label for="accordion3">Can I work for you?</label>
                        <div className="accordion__content">
                            <p>We are looking for candidates with the following qualities:</p>
                            <ul>
                                <li>20+ years of Machine Learning experience (We don't really need it, but we want you to know it.)</li>
                                <li>20+ years of React experience (you knew how to code in React before it was released)</li>
                                <li>You can create an Instagram/TikTok clone website in less than 5 minutes. It must have auth, backend, and run faster than the original.</li>
                                <li>You love having status meetings every 5 minutes.</li>
                                <li>You can solve all of the world's problems.</li>
                            </ul>
                            <p>Recommendations before applying: <strong className="uppercase red">Don't</strong></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>)
}

export default FAQs
