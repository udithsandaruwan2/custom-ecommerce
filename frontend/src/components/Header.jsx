import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand="lg" className="bg-body-tertiary" collapseOnSelect>
        <Container className='py-3'>
          <Navbar.Brand href="#">Custome Ecommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#action1">
                <i className="fas fa-home"></i> Home
              </Nav.Link>
              <Nav.Link href="#action2">
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
              <Nav.Link href="#action3">
                <i className="fas fa-user"></i> Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;
