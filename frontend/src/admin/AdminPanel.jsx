import React from 'react'
import "./style.css"
import {Navbar , Container, Nav, Button } from "react-bootstrap"
import { AiFillHome, AiOutlineUser } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'


function AdminPanel() {
  return (
      <Navbar bg="light" expand="lg" fixed='bottom'>
      <Container fluid>
        <Navbar.Brand href="/home">StudApp Blog Admin</Navbar.Brand>
        <Nav justify variant="tabs"  defaultActiveKey="/home">
                    <Nav.Item>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/adminpanel'>

                            <div className='nav-icon'>
                                <BsSearch />
                            </div></Nav.Link>
                    </Nav.Item>
                        <Nav.Link href="/adminpanel">
                            <div className='nav-icon'>
                                <AiFillHome />
                            </div>
                        </Nav.Link>
                    <Nav.Item>
                        <Nav.Link  href='/adminpanel'>
                            <div className='nav-icon'>
                                <AiOutlineUser />
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

      </Container>
    </Navbar>
  )
}

export default AdminPanel