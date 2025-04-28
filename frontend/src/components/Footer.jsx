import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaXTwitter, FaGithub } from 'react-icons/fa6';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo */}
        <div className="footer-logo">
          <img src="/luxe.svg" alt="Tu Logo" />
          
          {/* Redes sociales */}
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Secciones */}
        <div className="footer-sections">
          <div className="footer-section">
            <h4>Empresa</h4>
            <ul>
              <li><Link to="/historia">¿Quiénes somos?</Link></li>
              <li><Link to="/products">Tienda</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Atención al cliente</h4>
            <ul>
              <li><Link to="/contact">Contacto</Link></li>
              <li><Link to="/Terminos">Términos y condiciones</Link></li>
            </ul>
          </div>

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

      {/* Línea y texto final */}
      <div className="footer-bottom">
        <hr />
        <p>© 2025 LuxePet. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
