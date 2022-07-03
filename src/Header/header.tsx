import { Navbar, Nav } from "react-bootstrap";
import {  NavLink } from 'react-router-dom'

import './header.scss'

export default function Header() {
  return (
    <header>
      <Navbar variant="light" fixed="top">
        <Navbar.Brand href="#home">Hamza portfolio</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="#">Home</Nav.Link>
          <Nav.Link as={NavLink} to="#">About</Nav.Link>
          <Nav.Link as={NavLink} to="#">Portfolio</Nav.Link>
          <Nav.Link as={NavLink} to="#">News</Nav.Link>
          <Nav.Link as={NavLink} to="#">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
}
