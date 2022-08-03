import React, { useEffect } from 'react'
import { getPostsAsync, getUserPostsAsync, selectPost } from '../redux/post/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import './style.css'
import { useState } from 'react';
import { useParams } from 'react-router';

function UserPosts(props) {
    const posts = useSelector(selectPost);
    const dispacth = useDispatch();
      let {userId} = useParams();
      const id = userId ? userId : props.id

    useEffect (()=>{
        dispacth(getUserPostsAsync({id:id}));
        console.log(props)
    },[dispacth])

    return (
        <div >
            {
                posts.map((post)=>  (
                    <div key={post.ID} className='usr-post-card' >
                    <div className='card-body' >
                        <h1 className='post-title' >{post.title}</h1>
                        <p className='post-time' >{post.UpdatedAt}</p>
                    </div>
                </div>
                ))
            }           
        </div>
    )
}

export default UserPosts