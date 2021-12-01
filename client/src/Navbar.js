import React from 'react';
import { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './App.css';
import logo from './logo.svg'

class Navbar extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <>
                    <Navbar bg="dark" variant="dark" sticky="top">
                        <Container>
                            <Navbar.Brand href="#home">
                                <img
                                alt="logo"
                                src={logo}
                                width="200"
                                height="50"
                                className="d-inline-block align-top"
                                />{' '}
                            </Navbar.Brand>

                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Zacznij tutaj</Nav.Link>
                                <Nav.Link href="#browse">Przeglądaj</Nav.Link>
                                <Nav.Link href="#login">Zaloguj się</Nav.Link>
                                <Button variant="outline-warning" 
                                style={{color: "white", fontFamily: "Poppins", fontWeight: "bold", marginLeft:10}}>Dołącz do nas</Button>
                            </Nav>

                        </Container>
                    </Navbar>
                </>
            </div>
            )
        }
        
    }
    
    export default Navbar;
    