import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbars = () => {


  return (
    
    <Navbar className='bg-black text-white p-3' expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='text-white font-bold text-2xl'>SHOPIFY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-36">
          <Nav.Link href="#home"  className='text-white ms-24   text-lg'>Products</Nav.Link>
          <Nav.Link href="#home"  className='text-white ms-24   text-lg'>Wishlist</Nav.Link>
            <Nav.Link href="#home"  className='text-white ms-24 text-lg'>About</Nav.Link>
            <Nav.Link href="#link" className='text-white ms-24  text-lg'>cart</Nav.Link>
            <Nav.Link href="#link" className='text-white ms-48  text-lg'>Login</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )


}

export default Navbars