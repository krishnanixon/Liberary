import { Nav, Row, Col, Navbar, Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary position-fixed shadow-md" style={{ zIndex: "100", width: "100%" }}>
            <Container fluid>
                <Link to="/" style={LinkStyle}>
                    <Navbar.Brand className='fw-bold fs-4 px-4'>PERSONAL</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Link to="/" style={LinkStyle}>
                            <div className='mt-1 px-2 fw-semibold' >
                                Home
                            </div>
                        </Link>
                        <Link to="/all-books" style={LinkStyle}>
                            <div className='mt-1 px-2 fw-semibold' >
                                Manage
                            </div>
                        </Link>
                        <Link to="/add-books" style={LinkStyle}>
                            <div className='mt-1 px-2 fw-semibold' >
                                Add Books
                            </div>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;

const LinkStyle = {
    textDecoration: "none",
    color: "black",
}