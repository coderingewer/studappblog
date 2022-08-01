import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UpdateImage from '../image/UpdateImage'
import { editUserAsync, selectUser } from '../redux/user/userSlice'

function UpdateUserAvatar() {
    const dispact = useDispatch()
   

    const user = useSelector(selectUser)
    return (
        <div>
            <UpdateImage id={user.user_image.ID} />
        </div>
    )
}

export default UpdateUserAvatar