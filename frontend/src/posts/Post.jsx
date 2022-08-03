import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import "./style.css"
import { getPostAsync, selectPost } from '../redux/post/postSlice'
import { CgMoreVertical } from 'react-icons/cg'
import DeletePost from './DeletePost'

function Post() {
    const currentUser = useSelector((state) => state.users.CurrentUser);
    const userId = currentUser.id;
    const posts = useSelector(state => state.posts.items)
    const { postId } = useParams()
    const dispact = useDispatch()
    useEffect(() => {
        dispact(getPostAsync({ postId }))
    }
        , [dispact])
    console.log(posts)
    return (
        <div className='post' >
            <div className='post-body' >
                
                    <div className='card-more'>
                        <a className='link' >
                            <CgMoreVertical className='editbtn' />
                        </a>
                    </div>
                
            <DeletePost />
                {
                    posts.map((post) => (
                        <div key={post.ID} >
                            <img src={post.image.url} />
                            <div className='post-info' >
                                <h1 className='post-title' >{post.title}</h1>
                                <h1 className='post-author' >{post.sender.name}</h1>
                                <p className='post-time' >  {post.CreatedAt}</p>
                            </div>
                            <p className='post-content' >{post.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Post