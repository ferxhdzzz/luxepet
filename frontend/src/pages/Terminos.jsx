import React from 'react';
import './Terminos.css';

const Terminos = () => {
  return (
    <div className="terminos-container">
      <div className="terminos-content">
        <div className="header">
          <img src="/luxe.svg" alt="Logo LuxePet" className="logo" />
          <h1 className="title">Términos y Condiciones</h1>
          <p className="update-date">Última actualización: 21/02/2025</p>
        </div>
        
        <div className="terms-sections">
          <section className="term-section">
            <h2 className="section-title">1. Aceptación de los Términos</h2>
            <p>Al acceder, utilizar nuestro sitio web o descargar la aplicación "LuxePet", aceptas estos términos y condiciones. Si no estás de acuerdo, por favor, no utilices nuestros servicios.</p>
          </section>
          
          <section className="term-section">
            <h2 className="section-title">2. Descripción del Servicio</h2>
            <p>Luxe Pet es una tienda en línea y una aplicación innovadora diseñada para propietarios de mascotas que buscan productos de alta calidad, incluyendo ropa, accesorios, comida y juguetes para diversas mascotas.</p>
          </section>
          
          <section className="term-section">
            <h2 className="section-title">3. Licencia de Uso</h2>
            <p>Te otorgamos una licencia limitada, no exclusiva e intransferible para utilizar nuestros servicios en tu dispositivo, conforme a estos términos.</p>
          </section>
          
          <section className="term-section">
            <h2 className="section-title">4. Uso Aceptable</h2>
            <p>Te comprometes a no utilizar nuestro sitio web o aplicación para:</p>
            <ul className="terms-list">
              <li>Realizar actividades ilegales.</li>
              <li>Infringir derechos de propiedad intelectual.</li>
              <li>Distribuir virus o cualquier otro código malicioso.</li>
            </ul>
          </section>
          
          <section className="term-section">
            <h2 className="section-title">5. Propiedad Intelectual</h2>
            <p>Todos los derechos de propiedad intelectual relacionados con nuestro sitio web, aplicación y contenido son propiedad de Luxe Pet. No puedes reproducir, modificar o distribuir nuestro contenido sin consentimiento previo.</p>
          </section>
          
          <section className="term-section">
            <h2 className="section-title">6. Datos Personales</h2>
            <p>La recopilación y uso de tus datos personales se rige por nuestra <a href="https://www.google.com/about/company/user-consent-policy.html" className="link">Política de Privacidad</a>.</p>
          </section>
          
          <section className="term-section">
            <h2 className="section-title">7. Precios y Pagos</h2>
            <p>Los precios de los productos se muestran en nuestro sitio y están sujetos a cambios. Aceptamos diversas formas de pago, que se detallan al momento de la compra.</p>
          </section>
          
          <section className="term-section">
            <h2 className="section-title">8. Envíos y Devoluciones</h2>
            <p>Consulta nuestra política de envíos y devoluciones para información detallada sobre plazos, costos y procedimientos.</p>
          </section>
          
          <section className="term-section">
            <h2 className="section-title">9. Limitación de Responsabilidad</h2>
            <p>Luxe Pet no se hace responsable de daños directos, indirectos, incidentales o consecuentes que surjan del uso de nuestro sitio web, aplicación o de la compra de productos.</p>
          </section>
          
          <section className="term-section">
            <h2 className="section-title">10. Modificaciones</h2>
            <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Te notificaremos sobre cambios significativos a través de nuestro sitio web o por correo electrónico.</p>
          </section>
          
          <section className="term-section">
            <h2 className="section-title">11. Legislación Aplicable</h2>
            <p>Estos términos se rigen por las leyes de El Salvador, San Salvador. Cualquier disputa se resolverá en los tribunales de la Secretaría General – Corte Suprema de Justicia de El Salvador.</p>
          </section>
          
          <section className="term-section">
            <h2 className="section-title">12. Contacto</h2>
            <p>Si tienes preguntas sobre estos términos y condiciones, contáctanos en <a href="mailto:LuxePet@gmail.com" className="link">LuxePet@gmail.com</a></p>
          </section>
        </div>

      </div>
    </div>
  );
};

export default Terminos;