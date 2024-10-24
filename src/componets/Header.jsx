import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

function Header(props) {
    return (
        <header className='mb-5'>
            <Navbar bg='light' expand="lg" fixed='top'>
                <Container fluid>
                    <Navbar.Brand href="">React</Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar' />
                    <Navbar.Collapse id='navbar'>
                        <Nav 
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                        >
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
