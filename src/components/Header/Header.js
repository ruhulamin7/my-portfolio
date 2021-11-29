import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav-menu">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ruhul Amin's Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink as={Link} className="nav-link" to="/home">
                Home
              </NavLink>
              <NavLink as={Link} to="/about">
                About
              </NavLink>
              <NavLink as={Link} to="/projects">
                Project
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
