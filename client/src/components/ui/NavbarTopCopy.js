import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import JoinButton from "./JoinButton";
import LogoutButton from "./LogoutButton";
import Box from "@mui/material/Box";

import Logo from "./Logo";

class NavbarTopCopy extends Component {
  render() {
    return (
      <div>
        <>
          <Box mb={10}></Box>
          <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
              <Link to="/">
                <Navbar.Brand>
                  <Logo />
                </Navbar.Brand>
              </Link>

              <Nav className="mr-auto">
              <Link to="/create-gig" style={{ textDecoration: "none" }}>
                  <Navbar.Brand>Cześć Marcela!</Navbar.Brand>
                </Link>
                <Link to="/create-gig" style={{ textDecoration: "none" }}>
                  <Navbar.Brand>Stwórz Ofertę</Navbar.Brand>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Navbar.Brand>Przeglądaj</Navbar.Brand>
                </Link>
                <Link to="/User/info" style={{ textDecoration: "none" }}>
                  <Navbar.Brand>Profil</Navbar.Brand>
                </Link>
                <Link to="/create-profile" style={{ textDecoration: "none" }}>
                  <Navbar.Brand>Stwórz profil artysty</Navbar.Brand>
                </Link>
                <Link to="/Register" style={{ textDecoration: "none" }}>
                  <LogoutButton>Wyloguj</LogoutButton>
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      </div>
    );
  }
}

export default NavbarTopCopy;
