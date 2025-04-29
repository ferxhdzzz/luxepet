import React from 'react';
import { useNavigate } from 'react-router-dom'; // * Hook para navegar entre rutas en React Router
import './recupaeracion.css'; // * Importa los estilos específicos de esta vista

// * Componente que permite al usuario actualizar su contraseña
function ActualizarContra() {

  const navigate = useNavigate(); // * Inicializa la función de navegación

  // * Maneja el evento al hacer clic en "Actualizar", redirige a la página "/enviar"
  const handleLogin = () => {
    navigate('/enviar');
  };

  return (
    <div className="EnviaryAct">
      {/* * LOGO FIJO ARRIBA IZQUIERDA */}
      <img src="/luxe.svg" alt="Logo LuxePet" className="logo-fixed" />

      {/* * Contenedor de la imagen lateral */}
      <div className="image-containert">
        <img src="/lxpet.png" alt="App Preview" className="right-imaget" />
      </div>

      {/* * Contenedor principal del formulario */}
      <div className="form-containert">
        <h2 className="titlet">Nueva contraseña</h2>
        <br /><br />

        {/* * Campo para ingresar nueva contraseña */}
        <div className="form-group">
          <label className="label">Contraseña nueva</label>
          <input type="text" className="inputt" placeholder="" />
        </div>
        <br />

        {/* * Campo para confirmar nueva contraseña */}
        <div className="form-group">
          <label className="label">Confirmacion de contraseña</label>
          <input type="text" className="inputt" placeholder="" />
        </div>
        <br />
        <br />

        {/* * Botón para enviar la actualización y redirigir */}
        <button className="buttonn" onClick={handleLogin}>Actualizar</button>
      </div>
    </div>
  );
}

export default ActualizarContra; // * Exporta el componente para ser utilizado en la aplicación
