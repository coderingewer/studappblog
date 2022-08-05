import React from 'react'
import "./style.css"
import { useSelector } from 'react-redux'
import UserPosts from '../posts/UserPosts'
import { Container } from 'react-bootstrap'
import UProfile from './Profile'


function AdminPanel() {
  const user = useSelector(state => state.users.CurrentUser)
  console.log(user)
  return (
    <Container>
        <div className='my-profie'>
          <UProfile />
        </div>
        <div className='my-posts' >
          <h1 className='my-posts-title' >Gönderilerim</h1>
          <UserPosts id={user.ID} />
        </div>
    </Container>
  )
}

export default AdminPanel