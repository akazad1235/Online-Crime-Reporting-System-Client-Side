import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../Assets/images/logo.png'

const NavbarDesktop = () => {
    return (
        <Container fluid={true} className="m-0 p-0">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><img style={{width:'100px', height:'70px'}} src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Our Service</Nav.Link>
                        <Nav.Link href="#link">Registration</Nav.Link>
                        <Nav.Link href="#link">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </Container>
    );
};

export default NavbarDesktop;