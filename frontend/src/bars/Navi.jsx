import React from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'
import { Navbar, Container, Nav, Form } from 'react-bootstrap'
import { AiFillHome, AiOutlineUser } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { searchPosts } from '../redux/post/postSlice'

function Navi() {
  const dispacth = useDispatch()
  const [searchText, setSearchText] = React.useState("")
  const user = JSON.parse(localStorage.getItem("user_data")) 

  const hadleSearch = (text)=>{
    dispacth(searchPosts(searchText))
    setSearchText(text)
    console.log("filter")
  }

  return (
    <div>
      <Navbar  expand="lg" fixed='top'>
        <Container>

          <Navbar.Brand href="/home">StudApp Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse className='collapse'>
            <div className='navi-form' >

              <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchText}
              onChange={(e)=>hadleSearch(e.target.value)}
              />
            </Form>
              </div>
            <Nav  className="mr-auto">
            <Nav.Item>
              <Nav.Link href='/explore'>
                <div className='nav-icon'>
                  <BsSearch />
                </div></Nav.Link>
            </Nav.Item>
            <Nav.Link href="/home">
              <div className='nav-icon'>
                <AiFillHome />
              </div>
            </Nav.Link>
            {user &&
              <Nav.Item>
                <Nav.Link href='/editor'>
                  <div className='nav-icon'>
                    <FiEdit />
                  </div>
                </Nav.Link>
              </Nav.Item>}
            {user &&
                <Nav.Link href='/adminpanel' >
                <div className='nav-icon'>
                  <AiOutlineUser />
                  </div>
                </Nav.Link>
              }
              </Nav>
          </Navbar.Collapse>
              </Container>
      </Navbar>
    </div>

  )
}

export default Navi