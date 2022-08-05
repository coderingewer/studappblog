import React from 'react'
import { useSelector } from 'react-redux'

function PostNotFound() {
    const notfound = useSelector(state=>state.posts.notFound)
  return (

    <div id = "post-not-found" >
        <h1>Biz bunu bulamadık :/ </h1>
    </div>
  )
}

export default PostNotFound