import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home" style={{fontSize:"35px"}}>
      <i className="fa-brands fa-youtube fa-beat-fade " style={{color:"#cd131c"}}></i>
   
   {' '}
       MEDIA PLAYER
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}


export default Header