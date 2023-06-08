import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return (
        <>
           <Navbar bg="dark" expand="lg" className="navbar-style">
            <Container fluid>
                <Navbar.Brand className="navbar-text-brand" href="/">JobFinder</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className="navbar-text" href="about">About us</Nav.Link>
                    <Nav.Link className="navbar-text" href="contact">Contact</Nav.Link>
                    <NavDropdown title="Jobs" id="basic-nav-dropdown">
                    <NavDropdown.Item href="online-job">Online Jobs</NavDropdown.Item>
                    <NavDropdown.Item href="physical-job">Physical Jobs</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="nanny">
                        Found work? Hire a nanny!
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <Nav className="me-auto">
                    <Nav.Link className="navbar-text" href="login">Login</Nav.Link>
                    <Nav.Link className="navbar-text" href="register">Register</Nav.Link>
                </Nav>
            </Container>
            </Navbar>
        </>
    );
}

export { NavBar }