import React, { useContext, useRef } from 'react'
import './Navbarbuttons.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import ServerContext from '../../Features/ServerContext';

export default function SearchBar() {

  const searchTerm = useRef('');

  const { serverURL } = useContext(ServerContext)

  const handleSearch = async (e, tags) => {

    e.preventDefault()

    fetch(`${serverURL}/recipes/search/?tags=${await JSON.stringify(tags.split(' '))}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
          "Content-Type": "application/json",
      },
  })
      .then(res => res.json())
      .then(body => {
        console.log(body)
      })
  }

  return (
    <div>
         <Form className="d-flex">
            <Form.Control
              ref={searchTerm}
              type="search"
              placeholder="Search"
              className="searchBar me-2"
              aria-label="Search"
            />
            <Button 
              className="searchBtn" 
              variant="outline-success" 
              size='sm'
              onClick={(e) => handleSearch(e, searchTerm.current.value)}
            >
              Search
            </Button>
          </Form>
    </div>
  )
}

