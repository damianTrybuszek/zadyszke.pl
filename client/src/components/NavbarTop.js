import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import Logo from '../components/Logo'

class NavbarTop extends Component {
  render() {
    return (
      <div>
        <>
          <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
              <Link to="/">
                <Navbar.Brand>
                  <Logo/>
                </Navbar.Brand>
              </Link>

              <Nav className="mr-auto">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Navbar.Brand>Zacznij tutaj</Navbar.Brand>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Navbar.Brand>Przeglądaj</Navbar.Brand>
                </Link>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Navbar.Brand>Zaloguj się</Navbar.Brand>
                </Link>
                <Link to="/Register">
                  <Button
                    variant="outline-warning"
                    style={{
                      color: "white",
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      marginLeft: 10,
                    }}
                  >
                    Dołącz do nas
                  </Button>
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      </div>
    );
  }
}

export default NavbarTop;
