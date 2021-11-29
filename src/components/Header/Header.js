import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav-menu">
      <Navbar
        className="py-4"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand to="/home">
            <span style={{ color: "orange" }}>Ruhul Amin's Portfolio</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink as={Link} className="nav-link" to="/home">
                HOME
              </NavLink>
              <NavLink as={Link} to="/about">
                ABOUT
              </NavLink>
              <NavLink as={Link} to="/projects">
                PROJECTS
              </NavLink>
              <NavLink as={Link} to="/contact">
                CONTACT
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
