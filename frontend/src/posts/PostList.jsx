import React, { useEffect } from 'react'
import { getPostsAsync, selectPost } from '../redux/post/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import './style.css'
import { useState } from 'react';
import DeletePost from './DeletePost';
import { Navigate, useParams } from 'react-router';
import AdSense from 'react-adsense';
import { Form } from 'react-bootstrap';
import { CgMoreVertical } from 'react-icons/cg';

function PostList() {
    const posts = useSelector(selectPost);
    const dispacth = useDispatch();
    const postAction = useSelector((state) => state.posts);

    const currentUser = useSelector((state) => state.users.CurrentUser);
    const userId = currentUser ? currentUser.ID : " ";
    const [indx, setIndx] = useState(4);
    const { postId } = useParams()
    const [filterText, setFilterText] = useState("");

    const filtered = posts.filter((item) => {
        item.title
            .toLowerCase()
            .includes(filterText.toLowerCase())
    });

    console.log(filtered)
    useEffect(() => {
        dispacth(getPostsAsync());
    }, [dispacth])
    console.log(posts)
    return (
        <div className='post-list' >
            {
                posts.map((post, i) =>  (
                    <div key={post.ID} className='post-card' >
                        <div className='colorful-div'  ></div>
                        <div className='card-body' >
                            <a className='link' href={"/post/" + post.ID} >
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