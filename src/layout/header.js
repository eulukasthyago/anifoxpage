import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand as={Link} to="/">
        Anifox
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/download">
          Download
        </Nav.Link>
        <Nav.Link as={Link} to="/">
          Politica de privacidade
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
