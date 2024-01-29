import React from "react";

import { Navbar, Container, Nav, Button } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/Home">!World Wonders!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-bold">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <NavDropdown title="Wonders" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Wonder">Pramid</NavDropdown.Item>
              <NavDropdown.Item href="/Wonder">Tajmahal</NavDropdown.Item>
              <NavDropdown.Item href="/Wonder fw-bold">
                China Great Wall
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Button variant="success">
              <Nav.Link href="/Login">Login</Nav.Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
