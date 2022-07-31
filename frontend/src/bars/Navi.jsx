import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

function Navi() {
  return (
<div>
  <Navbar bg="light" expand="lg" fixed='top'>
      <Container fluid>
        <Navbar.Brand href="/home">StudApp Blog</Navbar.Brand>
      </Container>
    </Navbar>
</div>

)
}

export default Navi