import React from 'react';
import { useState } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarDesktop = () => {
    const logout = () =>{
        localStorage.clear()
    }

    const[navbar, setNavbar] = useState(false)


    const changeBackground = () => {
        console.log(window.scrollY);
        if(window.scrollY >= 80){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <Container fluid={true} className="m-0 p-0 ">
            <Navbar expand="lg"  className={navbar ? 'header-nav sticky': 'header-nav'}>
                <Navbar.Brand href="#home">Crome</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link > <Link to="/home">Home</Link></Nav.Link>
                        <Nav.Link > <Link to="/viewComplain">User Panel</Link></Nav.Link>
                        <Nav.Link > <Link to="/resigtraion">{localStorage.getItem('email') ? '': 'Registration'}</Link></Nav.Link>
    <Nav.Link > <Link to="/login">{localStorage.getItem('email') ? '': 'Login'}</Link></Nav.Link>
                       
                       <form>
                           {localStorage.getItem('email') ?  <button type="submit" className="btn btn-danger" onClick={logout}><Link to="/">Logout</Link></button> : '' }
                         
                       </form>
                        
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </Container>
    );
};

export default NavbarDesktop;