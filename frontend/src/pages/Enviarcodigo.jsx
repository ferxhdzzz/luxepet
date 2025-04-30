import React from 'react';
import { useNavigate } from 'react-router-dom'; // Siempre se tiene que exportar useNavigate para la navegación
import './recupaeracion.css'; // Importando el archivo CSS para estilos

function EnviarCodigo() {
  const navigate = useNavigate(); // Usamos useNavigate para la navegación programática

  // Función que se ejecuta cuando se hace clic en el botón para enviar el código
  const handleLogin = () => {
    navigate('/'); // Navega a la página principal
  };

  return (
    <div className="EnviaryAct">
      {/* LOGO FIJO ARRIBA IZQUIERDA */}
      <img src="/luxe.svg" alt="Logo LuxePet" className="logo-fixed" /> {/* Logo de LuxePet en la esquina superior izquierda */}

      {/* Contenedor de la imagen */}
      <div className="image-containert">
        <img src="/lxpet.png" alt="App Preview" className="right-imaget" /> {/* Imagen de vista previa de la app */}
      </div>

      {/* Contenedor del formulario */}
      <div className="form-containert">
        <h2 className="titlet">Recuperar Contraseña</h2> {/* Título de la sección */}
        <br /><br />
        
        {/* Campo de correo */}
        <div className="form-group">
          <label className="label">Correo</label> {/* Etiqueta para el campo de correo */}
          <input type="text" className="inputt" placeholder="" /> {/* Campo de entrada para correo */}
        </div>
        <br />

        {/* Campo para el código de confirmación */}
        <div className="form-group">
          <label className="label">Código de confirmación</label> {/* Etiqueta para el campo de código */}
          <input type="text" className="inputt" placeholder="" /> {/* Campo de entrada para el código */}
        </div>
        <br />
        <br />

        {/* Botón para enviar el código */}
        <button className="buttonn" onClick={handleLogin}>Enviar Código</button> {/* Al hacer clic, navega a la página principal */}
      </div>
    </div>
  );
}

export default EnviarCodigo;  // Exportamos el componente para usarlo en otras partes de la aplicación
