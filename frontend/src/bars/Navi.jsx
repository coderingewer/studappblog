import React from 'react'
import { Navbar, Nav, NavDropdown, Form, Button, Container } from 'react-bootstrap'

function Navi() {
  return (
<Navbar bg="light" expand="lg" fixed='top' >
      <Container fluid>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        <Navbar.Brand href="#">StudApp Blog</Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Sözü klavyeye bırak.."
              className="me-2"
              aria-label="Search"
              />
            <Button variant="outline-success">Ara</Button>
          </Form>
      </Nav>
      </Container>
    </Navbar>

)
}

export default Navi