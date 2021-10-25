import { Link } from 'react-router-dom'
import { Navbar, Nav} from 'react-bootstrap';

function NavBarComp(props) {
  return (
    <Navbar className="font-wheight" bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>)
}
export default NavBarComp