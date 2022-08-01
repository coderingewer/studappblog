import React from 'react'
import {Nav, Navbar } from 'react-bootstrap'
import './style.css'
import { AiFillHome, AiOutlineUser } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
function ButtomNav() {
    const user = JSON.parse(localStorage.getItem("user_data"))
    return (
        <div className='bottom-nav' >

            <Navbar bg="light" fixed='bottom' >

                <div className='bottom-nav-item' >
                </div>
                <Nav justify variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                    </Nav.Item>
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
                        <Nav.Link  href='/profile'>
                            <div className='nav-icon'>
                                <AiOutlineUser />
                            </div>
                        </Nav.Link>
                    </Nav.Item>}
                </Nav>
            </Navbar>
        </div>
    )
}

export default ButtomNav