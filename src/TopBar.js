import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

function TextLinkExample() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
             <Navbar.Brand href="#home"><img src="../instacart screenshot.png" alt="Instacart Logo" /></Navbar.Brand>
                <Nav>
                    <Nav.Link href="#LogIn">Log In</Nav.Link>
                    <Button variant="success">Sign Up</Button>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default TextLinkExample;