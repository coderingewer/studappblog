import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAsync, signOut } from '../redux/user/userSlice'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./style.css"
import "../admin/style.css"

import UserPosts from '../posts/UserPosts';
import { Navigate, useParams } from 'react-router';

function Profile() {
  const dispatch = useDispatch()
  const {userId} = useParams()
  const users = useSelector((state) => state.users.current)
  useEffect(() => {
    dispatch(getUserAsync(userId))
  }, [dispatch])
  return (
    <div className='my-profie'>
    <div  className='profile' >
        {console.log(users)}
      {
        users.map((user) => (
          <div key={user.ID} >
            <div className="user-card-body" >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Salt_Bae.png/220px-Salt_Bae.png" alt="" />
              <div>
                <h1>{user.username}</h1>
                <p>{user.name}</p>
              </div>
            </div>
            </div>
        ))
      }
    </div>
    </div>
  )
}

export default Profile