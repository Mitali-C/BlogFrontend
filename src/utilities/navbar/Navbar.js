import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import './navbar.css';

class NavBar extends React.Component{
  render(){
    return(
      <Navbar expand="lg">
        {/* <Navbar.Brand href="/">BLOG NAME</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className={window.location.pathname==="/" && "active-link"} href="/">HOME</Nav.Link>
            <Nav.Link className={window.location.pathname==="/category/lifestyle" && "active-link"} href="/category/lifestyle">LIFESTYLE</Nav.Link>
            <Nav.Link className={window.location.pathname==="/category/books" && "active-link"} href="/category/books">BOOKS</Nav.Link>
            <Nav.Link className={window.location.pathname==="/category/tales" && "active-link"} href="/category/tales">TALES</Nav.Link>
            <Nav.Link className={window.location.pathname==="/category/technology" && "active-link"} href="/category/technology">TECHNOLOGY</Nav.Link>
            <Nav.Link className={window.location.pathname==="/about" && "active-link"} href="/about">ABOUT</Nav.Link>
            <Nav.Link className={window.location.pathname==="/contact" && "active-link"} href="/contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> 
    )
  }
}
export default NavBar;