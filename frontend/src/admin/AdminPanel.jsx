import React from 'react'
import "./style.css"
import Edit from '../posts/Edit'
import { useSelector } from 'react-redux'
import { selectPost } from '../redux/post/postSlice'
import UploadPostImg from '../posts/UploadPostImg'


function AdminPanel() {
    const postslc = useSelector(state => state.posts)
    return (
        <div>
            <div>{postslc.posted ? <UploadPostImg /> : <Edit />}

            </div>
        </div>
    )
}

export default AdminPanel