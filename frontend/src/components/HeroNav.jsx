import React from "react";
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./HeroNav.css";

const HeroNav = () => {
  return (
    <>
      
      <Navbar bg="light" expand="lg" className="px-4 fixed-top">
        <Container>
          
          <Navbar.Brand as={Link} to="/">
            <img
              src="/LogoLuxe.png"
              alt="LuxePet Logo"
              width="200 "
              height="70"
              className="d-inline-block align-top"
            />{" "}

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
              <Nav.Link as={Link} to="/profile" className="fw-bold">
                Perfil
              </Nav.Link>

            
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

    
      <section className="hero-section">
        <Container className="hero-container">
          <div className="hero-text">
            <h1>Todo lo que tu mascota necesita en un solo lugar!</h1>
            <p>
              Bienvenido al sitio web de Luxe Pet, es un placer tenerte con nosotros.
              Ingresa a comenzar tu compra para tener la mejor experiencia para ti y tu mascota.
            </p>
            <Button as={Link} to="/products" className="btn-custom">
              Comienza tu compra
            </Button>
          </div>
          <div className="hero-image">
            <img src="/CatHomee.png" alt="Gato" />
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroNav;