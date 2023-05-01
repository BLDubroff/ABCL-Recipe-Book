import React from 'react'
import './Navbarbuttons.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default function SearchBar() {
  return (
    <div>
         <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="searchBar me-2"
              aria-label="Search"
            />
            <Button className="searchBtn" variant="outline-success" size='sm'>Search</Button>
          </Form>
    </div>
  )
}

