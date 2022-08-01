import React from 'react'
import UpdateImage from '../image/UpdateImage'

function UploadPostImg() {
    const id = localStorage.getItem("currentId")
  return (
    <div>
        <UpdateImage id = {id} />
    </div>
  )
}

export default UploadPostImg