import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo.png'

const NavbarDesktop = () => {
    return (
        <Container fluid={true} className="m-0 p-0">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><img style={{width:'100px', height:'70px'}} src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link > <Link to="/home">Home</Link></Nav.Link>
                        <Nav.Link > <Link to="/viewComplain">User Panel</Link></Nav.Link>
                        <Nav.Link > <Link to="/resigtraion">Registration</Link></Nav.Link>
                        <Nav.Link > <Link to="/login">Login</Link></Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </Container>
    );
};

export default NavbarDesktop;