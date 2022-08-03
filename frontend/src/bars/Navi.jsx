import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { AiFillHome, AiOutlineUser } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'

function Navi() {
  const user = JSON.parse(localStorage.getItem("user_data"))
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed='top'>
        <Container fluid>
          <Container>
          <Navbar.Brand href="/home">StudApp Blog</Navbar.Brand>
          </Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
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
              <Nav>
                <Nav.Link href='/adminpanel' >
                <div className='nav-icon'>
                  <AiOutlineUser />
                  </div>
                </Nav.Link>
              </Nav>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  )
}

export default Navi