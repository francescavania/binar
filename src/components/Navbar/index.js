import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import LogoNavbar from "../../assets/logo.png";
import "./style.css";

const NavBar = () => {
  return (
    <Navbar className="navbar-section" expand="lg">
      <Container>
        <Link to={`/`}>
          <Navbar.Brand>
            <img src={LogoNavbar} alt="logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Offcanvas id="basic-navbar-nav" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>BCR</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="navbar-item">
              <Nav.Link href="#ourservices" className="navbar-item-link">
                Our Services
              </Nav.Link>
              <Nav.Link href="#whyus" className="navbar-item-link">
                Why Us
              </Nav.Link>
              <Nav.Link href="#testimonial" className="navbar-item-link">
                Testimonial
              </Nav.Link>
              <Nav.Link href="#faq" className="navbar-item-link">
                FAQ
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
