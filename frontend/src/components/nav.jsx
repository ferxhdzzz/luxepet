import React from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./nav.css";



const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-4">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
        <img
    src="/luxe.svg"
    alt="LuxePet Logo"
    className="nav-logo"
  />{" "}
          <br />
          <br />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="fw-bold">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="fw-bold">
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className="fw-bold">
              Productos
            </Nav.Link>
            
            <Nav.Link as={Link} to="/contact" className="fw-bold">
              Contáctanos
            </Nav.Link>
            <Nav.Link as={Link} to="/configuration" className="fw-bold">
              Perfil
            </Nav.Link>
            <Nav.Link as={Link} to="/prueba" className="fw-bold">
              Prueba
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="fw-bold">
              Login
            </Nav.Link>

            {/* Carrito de compras */}
            <Nav.Link as={Link} to="/cart" className="fw-bold position-relative">
              <FaShoppingCart size={22} />
              <Badge
                bg="danger"
                pill
                className="position-absolute top-0 start-100 translate-middle"
              >
                1
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
