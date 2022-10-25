import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo.jpeg'

function BrandExample() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              className="d-inline-block align-top"
            />{' '}
            Amelia
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;