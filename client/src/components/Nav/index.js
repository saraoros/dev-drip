import React from "react";
import { Navbar, Nav, Container, Figure } from "react-bootstrap";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Logo from "../../assets/devDripLogo.png"
import Cart from "../Cart/index"

//import { from } from "@apollo/client";

function Header() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
          <Navbar
            //className="navbar navbar-expand-lg navbar-dark bg-dark"
            bg="light"
            variant="light"
            expand="lg"
            collapseOnSelect
          >
            <Link className="m-4" to="/orderHistory">
              Order History
            </Link>
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
            <Link className="m-4" to="/favorites">
              Favorites
            </Link>
            {Cart}
          </Navbar>
        </>
      );
    } else {
      return (
        <>
          <Navbar
            className="navbar"
            bg="light"
            variant="light"
            expand="lg"
            collapseOnSelect
          >
            <Link className="m-4" to="/signup">
              SignUp
            </Link>
            <Link className="m-4" to="/login">
              Login
            </Link>
          </Navbar>
        </>
      );
    }
  }

  return (
    <Navbar
      //className="navbar navbar-expand-lg navbar-dark bg-dark"
      bg="light"
      variant="light"
      expand="lg"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand href="/">
          <Figure><Figure.Image
            alt=""
            src={Logo}
            width="auto"
            height="auto"
            className="d-inline-block align-top"
          /></Figure>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <nav>{showNavigation()}</nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
