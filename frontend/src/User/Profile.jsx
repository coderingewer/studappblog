import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAsync, signOut } from '../redux/user/userSlice'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./style.css"
import UserPosts from '../posts/UserPosts';
import { Navigate } from 'react-router';

function Profile() {
  const dispatch = useDispatch()
  const userSlice = useSelector((state) => state.users)
  const user = JSON.parse(localStorage.getItem("user_data"));
  useEffect(() => {
    dispatch(getUserAsync(user.id))
  }, [dispatch])

  const handleSignOut = async () => {
    await dispatch(signOut())
    console.log("sign out")
  }

  return (
    <div className='profile' >
      {userSlice.isSignOut && <Navigate to="/" replace={true} /> }
      <div className="user-card-body" >
        <form className='profile-form' onSubmit={handleSignOut}>
          <button id='sign-out-btn' type='submit'>Çıkış</button>
          <a className='edit-link' href="/edituser">Düzenle</a>
        </form>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Salt_Bae.png/220px-Salt_Bae.png" alt="" />
        <div>
          <h1>{user.username}</h1>
          <p>{user.name}</p>
        </div>
        <div className='user-posts' >
        </div>
      </div>
    </div>
  )
}

export default Profile