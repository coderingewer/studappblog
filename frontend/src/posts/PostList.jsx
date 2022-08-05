import React, { useEffect } from 'react'
import { getPostsAsync, selectPost, viewPostAsync } from '../redux/post/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import './style.css'
import { useState } from 'react';
import AdSense from 'react-adsense';
import { useMemo } from 'react';

function PostList() {
    const posts =  useSelector(selectPost);
    const filtered = useSelector(state=>state.posts.filtered)
    const currentPosts = filtered.length !=0 ? filtered : posts
    const dispacth = useDispatch();
    const currentUser = useSelector((state) => state.users.CurrentUser);
    const userId = currentUser.ID


    useEffect(() => {
        dispacth(getPostsAsync());
    }, [dispacth])
    
    const viewPost = async (id)=>{
        await dispacth(viewPostAsync(id))
    }
    return (
        <div className='post-list' >
            {
                currentPosts.map((post, i) =>  (
                    <div  key={post.ID} className='post-card' >
                        <div className='colorful-div'  ></div>
                        <div className='card-body' >
                            <a  onClick={()=> userId !== post.sender.ID && viewPost(post.ID)}  className='link' href={"/post/" + post.ID} >
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
                            <div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <AdSense.Google
                client='pub-4301229156748291'
                slot='3634852612'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
                layoutKey='-gw-1+2a-9x+5c'
            />
        </div>
    )
}
export default React.memo( PostList)