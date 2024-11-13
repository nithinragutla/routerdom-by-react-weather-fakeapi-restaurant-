import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap"; // Import React Bootstrap components

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Restaurant</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/Description">Description</Nav.Link>
          <Nav.Link as={Link} to="/Menu">Menu</Nav.Link>
          <Nav.Link as={Link} to="/Images">Images</Nav.Link>
          <Nav.Link as={Link} to="/Address">Address</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
