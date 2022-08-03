import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import UpdateImage from '../image/UpdateImage'

function UploadPostImg(props) {
    const id = localStorage.getItem("currentId")
    const imgSlc = useSelector(state => state.images)
  return (
    <div>
        <UpdateImage btntext = {props.btntext} id = {props.id} />
    </div>
  )
}

export default React.memo(UploadPostImg)