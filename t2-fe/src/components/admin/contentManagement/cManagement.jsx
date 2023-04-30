import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function CManagement() {
  return <div>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Content Management</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Articles</Nav.Link>

            <Nav.Link href="#features">Tags</Nav.Link>
          </Nav>
        </Container>
      </Navbar>    
  </div>;
}
