import React, { useContext } from 'react'
import UserContext from '../../context'

function GetStarted() {
  const { setShowLoginModal } = useContext(UserContext)
  const openLogin = ()=>{
    setShowLoginModal(true)
  }
  return (
    <div class="jumbotron">
      <div class="container">
        <h1>We are <span>negative space</span>.</h1>
        <p>We are <strong>creators</strong>, <strong>innovators</strong>, and <strong>explorers</strong>.</p>
        <button onClick={openLogin} type="button" id="get-started-btn" class="btn">Get started</button>
        <br />
        {/* <span class="scroll glyphicon glyphicon-chevron-down"></span> */}
      </div>
    </div>)
}

export default GetStarted