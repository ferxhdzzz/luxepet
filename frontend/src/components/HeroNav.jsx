// Importa React
import React from "react";

// Importa componentes de React Bootstrap para construir la barra de navegación y botones
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";

// Importa Link para navegación sin recargar la página
import { Link } from "react-router-dom";

// Importa ícono de carrito de compras
import { FaShoppingCart } from "react-icons/fa";

// Importa estilos personalizados para este componente
import "./HeroNav.css";

// Componente funcional HeroNav
const HeroNav = () => {
  return (
    <>
      {/* Sección Hero: parte principal visual con mensaje destacado */}
      <section className="hero-section">
        {/* Contenedor de Bootstrap para centrar contenido y limitar ancho */}
        <Container className="hero-container">
          
          {/* Columna de texto a la izquierda */}
          <div className="hero-text">
            <h1>Todo lo que tu mascota necesita en un solo lugar!</h1>
            <p>
              Bienvenido al sitio web de Luxe Pet, es un placer tenerte con nosotros.
              Ingresa a comenzar tu compra para tener la mejor experiencia para ti y tu mascota.
            </p>
            
            {/* Botón que redirige a la página de registro */}
            <Button as={Link} to="/Register" className="btn-custom">
              Comienza tu compra
            </Button>
          </div>

          {/* Columna de imagen a la derecha */}
          <div className="hero-image">
            {/* Imagen representativa del sitio */}
            <img src="/CatHomee.png" alt="Gato" />
          </div>

        </Container>
      </section>
    </>
  );
};

// Exporta el componente para que pueda ser usado en otros archivos
export default HeroNav;
