import React from 'react'
import { useParams } from 'react-router-dom'
import users from '../../users.json';
function Profile() {
    const params = useParams();
    console.log(params);
    const user = users.find((user) => +user.id === +params.id);
    console.log(user);
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
