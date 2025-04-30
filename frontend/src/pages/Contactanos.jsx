import React from "react";
import "./Contactanos.css";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="contact-page">

      {/* Imagen de cabecera */}
      <div className="header-image">
        <img src="./contactanos.png" alt="Imagen de contacto" />
      </div>
      

      {/* Sección de contacto */}
      <div className="contact-section">
        <div className="contact-info">
          <h2>Comienza a hablar con nosotros</h2>
          <p>Si tienes alguna queja o sugerencias, completa el formulario<p>y con gusto te leeremos, agradecemos cualquier <p>comentario de tu gusto </p></p> .</p>
          <div className="contact-detail">
            <FaPhone className="icon" />
            <span>+503 7104 2228</span>
          </div>
          <div className="contact-detail">
            <FaEnvelope className="icon" />
            <span>LuxePet@gmail.com</span>
          </div>
        </div>

        {/* Formulario */}
        <div className="contact-form">
          <form>
            <div className="form-row">
              <input type="text" placeholder="Nombre*" />
              <input type="text" placeholder="Apellido*" />
            </div>
            <input type="email" placeholder="Correo*" />
            <input type="text" placeholder="Número telefónico*" />
            <textarea placeholder="Tu mensaje" rows="5"></textarea>
            <button type="submit">Enviar mensaje</button>
          </form>
        </div>
      </div>

      {/* Testimonios */}
      <section className="testimonios">
        <div className="testimonios-texto">
          <h2>¿Te gustaria calificarnos?</h2>
          <p className="estrellas">★★★★★</p>
          <p className="comentario">
            Ingresa tu calificación para mejorar como aplicación
          </p>
        </div>

        <div className="testimonios-imagen">
          <img src="https://i.pinimg.com/736x/8a/34/b9/8a34b9c8aabe95428db27fe83367f644.jpg" alt="Cliente feliz" />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
