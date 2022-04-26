import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
  const [user]=useAuthState(auth);
  const hendlesingout=()=>{
    signOut(auth)
  

  }
    return (
        
      
           
        
        <Navbar  className='css' bg="dark" expand="lg" >
  <Container>
    <Navbar.Brand className='text-white css-brand'>Hotel - Classic</Navbar.Brand>
    <Navbar.Toggle   aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="custom ms-auto">

        <Link to="/">Home</Link>
        <Link to='/detail'>Detail</Link>

        <Link to="/shop">Shop</Link>
        
        <Link to="/about">About</Link>
        
        {user?
        <button className='ms-4 btn bg-light fw-bold '  onClick={hendlesingout}>Sing out</button>


        :
        <Link to="/login">Login</Link>
      }
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        
        
        
    );
};

export default Header;