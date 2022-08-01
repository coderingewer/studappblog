import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import UpdateImage from '../image/UpdateImage'

function UploadPostImg() {
    const id = localStorage.getItem("currentId")
    const imgSlc = useSelector(state => state.images)
  return (
    <div>
        <UpdateImage id = {id} />
        {imgSlc.isUpdated && <Navigate to="/home" replace= {true}/>}
    </div>
  )
}

export default UploadPostImg