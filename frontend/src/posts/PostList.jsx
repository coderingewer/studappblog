import React, { useEffect } from 'react'
import { getPostsAsync, selectPost } from '../redux/post/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import './style.css'
import { useState } from 'react';

function PostList() {
    const posts = useSelector(selectPost);
    const dispacth = useDispatch();
    const [indx, setIndx]  = useState(10);

    useEffect (()=>{
        dispacth(getPostsAsync());
    },[dispacth])

    return (
        <div className='post-list' >
            {

                posts.map((post, i)=> i <= indx && (
                    <div key={post.ID} className='post-card' >
                    <div className='card-body' >
                        <h1 className='post-title' >{post.title}</h1>
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
                </div>
                ))
            }
            <button onClick={()=>setIndx(indx+5)} >Daha fazla</button>
           
        </div>
    )
}

export default PostList