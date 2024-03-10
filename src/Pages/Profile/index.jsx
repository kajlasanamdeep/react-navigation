import React from 'react'
import { useLocation } from 'react-router-dom'
function Profile() {
    const location = useLocation();
    console.log(location);
    const user = location.state;
    return (
        <div>
              Profile
              <br/>
            USER ID : {user.id}
            <br/>
            USER NAME : {user.name}
        </div>
    )
}

export default Profile
