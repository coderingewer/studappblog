import React from 'react'
import { Container } from 'react-bootstrap'
import Popular from '../posts/Popular'
import PostList from '../posts/PostList'
import Dashboard from './Dashboard'
import './style.css'

function Home() {
  return (
    <div className="App">
      <Dashboard />
      <Container>
        <Popular />
        <PostList />
      </Container>
    </div>
  )
}

export default Home