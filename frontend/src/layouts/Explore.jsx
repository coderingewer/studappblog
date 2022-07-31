import React from 'react'
import "./style.css"
import { Form, Button, FormControl } from 'react-bootstrap'

function Explore() {
  return (
    <div className='explore' >

      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Ara"
          className="me-2"
          aria-label="Search"
        />
      </Form>
      <div className='explore-items' >

        <div className='explore-card' >
          <h1 >lorem</h1>
        </div>
        <div className='explore-card' >
          <h1 >lorem</h1>
        </div>

        <div className='explore-card' >
          <h1 >lorem</h1>
        </div>
      </div>
    </div>
  )
}

export default Explore