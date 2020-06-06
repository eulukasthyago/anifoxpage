import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand as={Link} to="/anifoxpage">
        Anifox
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/anifoxpage">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/anifoxpage/download">
          Download
        </Nav.Link>
        <Nav.Link as={Link} to="/anifoxpage">
          Politica de privacidade
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
