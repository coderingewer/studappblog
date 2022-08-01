import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../redux/user/userSlice'
import "./style.css"

function Profile() {
    const dispatch = useDispatch()
    const userSlice = useSelector((state) => state.users)
    const user = userSlice.CurrentUser
    const handleSignOut =  async (e) => {
        e.preventDefault()
       await dispatch(signOut())
        console.log("sign out")
    }
    console.log(user)
  return (
    <div className='profile' >
      <div>
      </div>
        <div>
          <h1>{user.username}</h1>
        </div>
        <br /> 
        <br /> <br />
        <div>
          <p>{user.name}</p>
        </div>
        <form onSubmit={handleSignOut}>
        <button  type='submit'>Sign out</button>
        </form>
    </div>
  )
}

export default Profile