import React from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap"; // Componentes de Bootstrap para la barra de navegación
import { Link } from "react-router-dom"; // Componente para navegación entre rutas sin recargar
import { FaShoppingCart } from "react-icons/fa"; // Ícono de carrito de compras
import "./nav.css"; // Estilos personalizados

// Componente funcional Navigation
const Navigation = () => {
  return (
    // Componente Navbar de Bootstrap, con fondo claro y espaciado horizontal
    <Navbar bg="light" expand="lg" className="px-4">
      <Container>
        {/* Logo del sitio, redirige al inicio */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="/luxe.svg" // Ruta de la imagen del logo
            alt="LuxePet Logo" // Texto alternativo
            className="nav-logo" // Clase para estilos personalizados
          />{" "}
          <br />
          <br />
        </Navbar.Brand>

        {/* Botón que muestra/oculta la navegación en pantallas pequeñas */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Contenedor de los enlaces de navegación */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Alineación a la derecha */}
            {/* Enlace a la página de inicio */}
            <Nav.Link as={Link} to="/" className="fw-bold">
              Inicio
            </Nav.Link>

            {/* Enlace a la sección "Sobre Nosotros" */}
            <Nav.Link as={Link} to="/about" className="fw-bold">
              Sobre Nosotros
            </Nav.Link>

            {/* Enlace a la tienda de productos */}
            <Nav.Link as={Link} to="/products" className="fw-bold">
              Productos
            </Nav.Link>

            {/* Enlace a la página de contacto */}
            <Nav.Link as={Link} to="/contact" className="fw-bold">
              Contáctanos
            </Nav.Link>

            {/* Enlace al perfil del usuario */}
            <Nav.Link as={Link} to="/configuration" className="fw-bold">
              Perfil
            </Nav.Link>

            {/* Enlace al carrito de compras, incluye ícono */}
            <Nav.Link as={Link} to="/cart" className="fw-bold position-relative">
              <FaShoppingCart size={22} /> {/* Ícono del carrito */}
              {/* Se podría agregar aquí un <Badge> para mostrar el número de productos */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation; // Exportación del componente para su uso en la app
