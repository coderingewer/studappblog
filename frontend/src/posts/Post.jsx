import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getPostAsync, selectPost } from '../redux/post/postSlice'

function Post() {
    const post = useSelector(state =>state.posts.currentPost)
    const { postId } = useParams()
    const dispact = useDispatch()
    useEffect( ()=>{
        new Promise(r => setTimeout(r, 20));
         dispact(getPostAsync({postId}))
    }
    ,[dispact])
    return (
        <div>
            <br /><br /><br /><br /><br /><br />
                    <div key={post.id} >
                        <img className='post-img' src={post.image.url} alt="" />
                        <h1>{post.title}</h1>
                        <p>{post.content}</p>
                    </div>
        </div>
    )
}

export default Post