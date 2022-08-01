import React, { useEffect } from 'react'
import { getPostsAsync, selectPost } from '../redux/post/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import './style.css'
import { useState } from 'react';
import DeletePost from './DeletePost';
import { useParams } from 'react-router';

function PostList() {
    const posts = useSelector(selectPost);
    const dispacth = useDispatch();
    const currentUser = useSelector((state) => state.users.CurrentUser);
    const userId  = currentUser ?  currentUser.id: " ";
    const [indx, setIndx]  = useState(4);
    const { postId } = useParams()

    useEffect (()=>{
        dispacth(getPostsAsync());
    },[dispacth])
    return (
        <div className='post-list' >
            {
                posts.map((post, i)=> i <= indx && (
                    <div key={post.ID} className='post-card' >
                    <div className='card-body' >
                        <a className='link' href={"/post/" + post.ID } >
                        <h1 className='post-title' >{post.title}</h1>
                        </a>
                        <p className='post-author' >{post.sender.name}</p>
                        <p className='post-time' >{post.UpdatedAt}</p>
                        <div className='card-text' >
                        <p >
                          {post.content}
                        </p>
                        </div>
                    </div>
                    <div>
                        <img className='post-img' src={post.image.url} alt="" />
                    </div>
                    <div>
                    {post.userId === userId && <DeletePost id = {post.ID} /> }
                    </div>
                </div>
                ))
            }
            <button onClick={()=>setIndx(indx+5)} >Daha fazla</button>
          </div>
    )
}
export default PostList