import React from "react";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function ColorSchemesExample() {
  return (
    <>
      <Container className={styles.menutop}>
        <Navbar
          collapseOnSelect
          scroling
          dark
          expand="lg"
          fixed="top"
          className="navbar"
        >
          <Container>
            <Navbar.Brand href="#home">
              <Image
                src="/images/logo2.png"
                width="120"
                height="58"
                className="d-inline-block align-top"
                alt="Oluwaseun Anselm logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto justify-center">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About Me</Nav.Link>
                <Nav.Link href="#pricing">Showcase</Nav.Link>
                <FontAwesomeIcon icon={"coffee"} />

                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
              </Nav>
              <Nav>
                <Nav.Link href="#deets" className="menubar">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-linkedin"></i>
                  <i className="bi bi-youtube"></i>
                  <i className="bi bi-share"></i>
                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes"></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}

export default ColorSchemesExample;
