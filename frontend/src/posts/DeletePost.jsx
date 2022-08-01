import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { deletePostsAsync } from '../redux/post/postSlice'


function DeletePost(props) {
    const {postId} =  useParams()
    const id = postId ? postId : props.id
    const dispacth = useDispatch()
    const handleDelete =  (e)=>{
        e.preventDefault()
          dispacth(deletePostsAsync(id))
        console.log(postId)
    }

  return (
    <div>
        <br /><br /><br /><br /><br /><br />
        <form onSubmit={handleDelete} >
        <button type="submit" >Sil</button>
        </form>
    </div>
  )
}

export default DeletePost