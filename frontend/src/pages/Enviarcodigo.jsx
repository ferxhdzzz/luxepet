import React from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para redirigir a otra ruta en React Router
import './recupaeracion.css'; // Importación del archivo de estilos específicos

function EnviarCodigo() {

  const navigate = useNavigate(); // Inicializa el hook de navegación

  // Función que redirige al usuario a la página de inicio cuando se presiona el botón
  const handleLogin = () => {
    navigate('/'); // Redirige a la raíz del sitio ("/")
  };

  return (
    <div className="EnviaryAct">
      
      {/* LOGO FIJO ARRIBA IZQUIERDA */}
      <img src="/luxe.svg" alt="Logo LuxePet" className="logo-fixed" />

      {/* Contenedor de la imagen lateral derecha */}
      <div className="image-containert">
        <img src="/lxpet.png" alt="App Preview" className="right-imaget" />
      </div>

      {/* Contenedor del formulario de recuperación */}
      <div className="form-containert">
        {/* Título principal */}
        <h2 className="titlet">Recuperar Contraseña</h2>
        <br /><br />

        {/* Grupo de formulario para el correo electrónico */}
        <div className="form-group">
          <label className="label">Correo</label>
          <input type="text" className="inputt" placeholder="" />
        </div>
        <br />

        {/* Grupo de formulario para el código de confirmación */}
        <div className="form-group">
          <label className="label">Código de confirmación</label>
          <input type="text" className="inputt" placeholder="" />
        </div>
        <br />
        <br />

        {/* Botón para enviar el código - redirige al inicio */}
        <button className="buttonn" onClick={handleLogin}>Enviar Código</button>
      </div>
    </div>
  );
}

export default EnviarCodigo; // Exportación del componente para ser usado en otras partes de la app
