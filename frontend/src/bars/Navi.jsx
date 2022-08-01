import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

function Navi() {
  const user = JSON.parse(localStorage.getItem("user_data"))
  return (
<div>
  <Navbar bg="light" expand="lg" fixed='top'>
      <Container fluid>
        <Navbar.Brand href="/home">StudApp Blog</Navbar.Brand>
          { user && 
        <Nav>
          <Nav.Link href='/adminpanel' >
            Admin
          </Nav.Link>
        </Nav>}
      </Container>
    </Navbar>
</div>

)
}

export default Navi