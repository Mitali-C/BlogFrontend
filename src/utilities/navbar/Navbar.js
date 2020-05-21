import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import './navbar.css'

class NavBar extends React.Component{
  render(){
    return(
      <Navbar expand="lg">
        <Navbar.Brand href="/">BLOG NAME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">BLOGS</Nav.Link>
            <Nav.Link href="/">BOOK REVIEWS</Nav.Link>
            <Nav.Link href="/">TECHNOLOGY</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/about">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> 
    )
  }
}
export default NavBar;