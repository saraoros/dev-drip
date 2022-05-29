import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
//import { from } from "@apollo/client";

function Header() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
          <Navbar
            className="navbar navbar-expand-lg navbar-dark bg-dark"
            expand="lg"
            collapseOnSelect
          >
            <Container>
              <Link className="m-4" to="/orderHistory">
                Order History
              </Link>
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
              <Link className="m-4" to="/favorites">
                Favorites
              </Link>
            </Container>
          </Navbar>
        </>
      );
    } else {
      return (
        <>
          <Navbar
            className="navbar navbar-expand-lg navbar-dark bg-dark"
            variant="dark"
            expand="lg"
            collapseOnSelect
          >
            <Container>
              <Link className="m-4" to="/signup">
                SignUp
              </Link>
              <Link className="m-4" to="/login">
                Login
              </Link>
              {/* <Link to="/cart">Cart</Link> */}
            </Container>
          </Navbar>
        </>
      );
    }
  }

  return (
    <Navbar
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      variant="dark"
      expand="lg"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand className="jumbo" href="/">DevDrip</Navbar.Brand>
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
