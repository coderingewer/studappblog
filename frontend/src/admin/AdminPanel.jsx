import React from 'react'
import "./style.css"
import Edit from '../posts/Edit'
import { useSelector } from 'react-redux'
import { selectPost } from '../redux/post/postSlice'
import UploadPostImg from '../posts/UploadPostImg'
import Profile from '../User/Profile'


function AdminPanel() {
    const postslc = useSelector(state => state.posts)
    return (
        <div>
          <Profile/>
           
        </div>
    )
}

export default AdminPanel