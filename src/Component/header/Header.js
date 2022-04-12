import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        
      
           
        
        <Navbar  className='css' bg="dark" expand="lg" >
  <Container>
    <Navbar.Brand className='text-white css-brand'>Hotel Habibi</Navbar.Brand>
    <Navbar.Toggle   aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="custom ms-auto">

        <Link to="/">Home</Link>

        <Link to="/shop">Shop</Link>
        
        <Link to="/about">About</Link>
        
        <Link to="/login">Login</Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        
        
        
    );
};

export default Header;