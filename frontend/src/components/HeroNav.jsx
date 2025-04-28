import React from "react";
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./HeroNav.css";

const HeroNav = () => {
  return (
    <>
       
      <section className="hero-section">
        <Container className="hero-container">
          <div className="hero-text">
            <h1>Todo lo que tu mascota necesita en un solo lugar!</h1>
            <p>
              Bienvenido al sitio web de Luxe Pet, es un placer tenerte con nosotros.
              Ingresa a comenzar tu compra para tener la mejor experiencia para ti y tu mascota.
            </p>
            <Button as={Link} to="/Register" className="btn-custom">
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