import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Popular from '../posts/Popular'
import PostList from '../posts/PostList'
import Dashboard from './Dashboard'
import PostNotFound from './PostNotFoun'
import './style.css'

function Home() {
  const notfound = useSelector(state=>state.posts.notFound)
  return (
    <div className="App">
      <Dashboard />
      <Container>
        <div className='notfound' >
        {notfound && <PostNotFound/>}
        </div>
        <PostList />
      </Container>
    </div>
  )
}

export default Home