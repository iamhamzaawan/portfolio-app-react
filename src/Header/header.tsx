import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useLocation, Link } from "react-router-dom";

import "./header.scss";

export default function Header() {
  const [colorChange, setColorchange] = useState(false);
  let location = useLocation();

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
  }, [])

  const changeNavbarColor = () => {
    if(window.scrollY >= 420)
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
      <Navbar variant='light' fixed="top" className={colorChange ? 'opened' : ''}>
        <Navbar.Brand href="#home">BLOG</Navbar.Brand>
        <Nav activeKey={location.pathname} className="ms-auto">
          {renderLinks()}
        </Nav>
      </Navbar>
      
      {/* TODO: Add mobile menu */}
    </Container>
  );
}
