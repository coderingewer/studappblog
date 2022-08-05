import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router'
import "./style.css"
import { getPostAsync, selectPost } from '../redux/post/postSlice'
import { CgMoreVertical } from 'react-icons/cg'
import DeletePost from './DeletePost'

function Post() {
    const currentUser = useSelector((state) => state.users.CurrentUser);
    const userId = currentUser.ID;
    const postSlc = useSelector(state=>state.posts)
    const posts = useSelector(state => state.posts.current)
    const { postId } = useParams()
    const dispact = useDispatch()
    useEffect(() => {
        dispact(getPostAsync({ postId }))
    }
        , [dispact])
    console.log(posts)
    console.log(posts)
    return (
        <div className='post' >
            <div className='post-body' >
                {
                    posts.map((post) => (
                        <div key={post.ID} >
                            <div className='dropdown'>
                            <button className="dropbtn"><CgMoreVertical/></button>
                                <div className='dropdown-content' >
                                <a  href={"/updatepost/" + post.ID} className='editlink' >
                                    Düzenle
                                </a>
                                <DeletePost />
                                </div>
                            </div>
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
                {postSlc.deleted && <Navigate to = "/" replace = {true}/>}
            </div>
        </div>
    )
}

export default Post