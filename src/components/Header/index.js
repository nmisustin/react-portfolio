import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Header(props) {
    const {
        currentCategory,
        setCurrentCategory,
        contactSelected,
        setContactSelected
    } = props;
    return <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#">&nbsp;Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#about" onClick={() => {setContactSelected(false); setCurrentCategory('about')}}>About Me</Nav.Link>
                <Nav.Link href="#my-work" onClick={() => {setContactSelected(false); setCurrentCategory('my-work')}}>My Work</Nav.Link>
                <Nav.Link href="#contact" onClick={() => {setContactSelected(true); setCurrentCategory('contact')}}>Contact Me</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}
export default Header;