import React from "react";
import "./Contactanos.css";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="contact-page">
      
      {/* Sección de imagen de cabecera - puede ser decorativa o representar la marca */}
      <div className="header-image">
        <img src="./contactanos.png" alt="Imagen de contacto" />
      </div>

      {/* Contenedor principal de la sección de contacto (info + formulario) */}
      <div className="contact-section">

        {/* Columna con información de contacto */}
        <div className="contact-info">
          <h2>Comienza a hablar con nosotros</h2>

          {/* Aquí hay un error: los <p> están anidados, lo cual no es válido en HTML/JSX */}
          {/* Se recomienda reemplazar por múltiples <p> separados */}
          <p>Si tienes alguna queja o sugerencias, completa el formulario</p>
          <p>y con gusto te leeremos, agradecemos cualquier</p>
          <p>comentario de tu gusto.</p>

          {/* Línea con ícono de teléfono y número */}
          <div className="contact-detail">
            <FaPhone className="icon" />
            <span>+503 7104 2228</span>
          </div>

          {/* Línea con ícono de email y dirección */}
          <div className="contact-detail">
            <FaEnvelope className="icon" />
            <span>LuxePet@gmail.com</span>
          </div>
        </div>

        {/* Columna con el formulario de contacto */}
        <div className="contact-form">
          <form>
            {/* Fila con dos inputs lado a lado para nombre y apellido */}
            <div className="form-row">
              <input type="text" placeholder="Nombre*" />
              <input type="text" placeholder="Apellido*" />
            </div>

            {/* Campo para correo electrónico */}
            <input type="email" placeholder="Correo*" />

            {/* Campo para número telefónico */}
            <input type="text" placeholder="Número telefónico*" />

            {/* Área de texto para el mensaje del usuario */}
            <textarea placeholder="Tu mensaje" rows="5"></textarea>

            {/* Botón para enviar el formulario */}
            <button type="submit">Enviar mensaje</button>
          </form>
        </div>
      </div>

      {/* Sección para testimonios o calificación del usuario */}
      <section className="testimonios">

        {/* Texto de invitación a dejar calificación */}
        <div className="testimonios-texto">
          <h2>¿Te gustaria calificarnos?</h2>

          {/* Representación visual de una calificación de 5 estrellas */}
          <p className="estrellas">★★★★★</p>

          {/* Texto motivacional para incentivar feedback */}
          <p className="comentario">
            Ingresa tu calificación para mejorar como aplicación
          </p>
        </div>

        {/* Imagen decorativa de un cliente feliz */}
        <div className="testimonios-imagen">
          <img
            src="https://i.pinimg.com/736x/8a/34/b9/8a34b9c8aabe95428db27fe83367f644.jpg"
            alt="Cliente feliz"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
