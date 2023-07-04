import React, { useContext, useRef, FormEvent } from "react";
import "./Navbarbuttons.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ServerContext from "../../Features/ServerContext";
import { useNavigate } from "react-router-dom";

export default function SearchBar(): JSX.Element {
  const navigate = useNavigate();
  const searchTerm = useRef<HTMLInputElement>(null);
  const { serverURL } = useContext(ServerContext);

  const handleSearch = async (e: FormEvent, tags: string): Promise<void> => {
    e.preventDefault();

    navigate(`/search/?tags=${await JSON.stringify(tags.split(" "))}`);
  };

  return (
    <div>
      <Form
        className="d-flex"
        onSubmit={(e) => handleSearch(e, searchTerm.current?.value || '')}
      >
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
          size="sm"
          onClick={(e) => handleSearch(e, searchTerm.current?.value || '')}
        >
          Search
        </Button>
      </Form>
    </div>
  );
}
