import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

import "./header.scss";

export default function Header() {
  const [colorChange, setColorchange] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  let location = useLocation();

  useEffect(() => {
    if(firstRender){
      changeNavbarColor();
      window.addEventListener('scroll', changeNavbarColor);
      window.addEventListener('resize', changeNavbarColor);
      setFirstRender(false)
    }

  }, [firstRender])

  const changeNavbarColor = () => {
    if(window.scrollY >= 420 || window.innerWidth <= 768)
      setColorchange(true);
    else
      setColorchange(false);
  };

  const renderLinks = () => (
    ['Home', 'About', 'Portfolio', 'News', 'Contact'].map(link => (
      <Nav.Link key={link} className={colorChange ? 'text-dark' : 'text-white' } as={NavLink} to={link === 'Home' ? '' : link}>
        {link}
      </Nav.Link>
    ))
  )

  return (
    <Container>
      <Navbar collapseOnSelect expand="md" variant='light' fixed="top" className={colorChange ? 'opened' : ''}>
        <Navbar.Brand href="#home">Hamza Awan</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav activeKey={location.pathname} className="ms-auto">
            {renderLinks()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      {/* TODO: Add mobile menu */}
    </Container>
  );
}
