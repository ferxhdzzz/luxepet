// Importa React y otras dependencias necesarias
import React from 'react';
// Importa Link de react-router-dom para navegación interna
import { Link } from 'react-router-dom';
// Importa iconos de redes sociales desde react-icons
import { FaFacebookF, FaInstagram, FaXTwitter, FaGithub } from 'react-icons/fa6';
// Importa los estilos del footer
import './Footer.css';

// Componente funcional Footer
function Footer() {
  return (
    <footer className="footer"> {/* Contenedor principal del footer */}
      <div className="footer-top"> {/* Parte superior del footer con logo y secciones */}

        {/* Logo */}
        <div className="footer-logo">
          <img src="/luxe.svg" alt="Tu Logo" /> {/* Logo de la tienda */}

          {/* Redes sociales */}
          <div className="footer-socials">
            {/* Cada ícono es un enlace externo que abre en nueva pestaña */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF /> {/* Ícono de Facebook */}
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> {/* Ícono de Instagram */}
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter /> {/* Ícono de Twitter (X) */}
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub /> {/* Ícono de GitHub */}
            </a>
          </div>
        </div>

        {/* Secciones del footer */}
        <div className="footer-sections">

          {/* Sección Empresa */}
          <div className="footer-section">
            <h4>Empresa</h4>
            <ul>
              <li><Link to="/historia">¿Quiénes somos?</Link></li> {/* Enlace interno */}
              <li><Link to="/products">Tienda</Link></li>
            </ul>
          </div>

          {/* Sección Atención al cliente */}
          <div className="footer-section">
            <h4>Atención al cliente</h4>
            <ul>
              <li><Link to="/contact">Contacto</Link></li>
              <li><Link to="/Terminos">Términos y condiciones</Link></li>
            </ul>
          </div>

          {/* Sección Mi cuenta */}
          <div className="footer-section">
            <h4>Mi cuenta</h4>
            <ul>
              <li><Link to="/login">Iniciar sesión</Link></li>
              <li><Link to="/configuration">Mi configuración</Link></li>
              <li><Link to="/cart">Mi carrito</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Parte inferior del footer: línea divisoria y texto */}
      <div className="footer-bottom">
        <hr /> {/* Línea horizontal */}
        <p>© 2025 LuxePet. Todos los derechos reservados.</p> {/* Texto legal */}
      </div>
    </footer>
  );
}

// Exporta el componente para poder usarlo en otras partes de la app
export default Footer;
