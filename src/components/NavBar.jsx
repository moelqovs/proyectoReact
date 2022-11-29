//Navegación
import CartWidget from './CartWidget';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar=()=> {
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
        <Container fluid>
        <Navbar.Brand href="#">Moelqovs</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Urbano</Nav.Link>
            <Nav.Link href="#action2">Sedan</Nav.Link>
            <Nav.Link href="#action3">Todoterreno</Nav.Link>
            <Nav.Link href="#action4">Pickup</Nav.Link>
          </Nav>

            <Button variant="outline-success">
                <CartWidget/>
            </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    )
}

export default NavBar;