import React from 'react';
import { useNavigate } from 'react-router-dom'; // Siempre se tiene que exportar useNavigate para la navegación
import './recupaeracion.css';

function EnviarCodigo() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/enviar');
  };

  return (
    <div className="EnviaryAct">
      {/* LOGO FIJO ARRIBA IZQUIERDA */}
      <img src="/luxe.svg" alt="Logo LuxePet" className="logo-fixed" />

      {/* Contenedor de la imagen */}
      <div className="image-containert">
        <img src="/lxpet.png" alt="App Preview" className="right-imaget" />
      </div>

      {/* Contenedor del formulario */}
      <div className="form-containert">
        <h2 className="titlet">Recuperar Contraseña</h2>
        <br /><br />
        <div className="form-group">
          <label className="label">Correo</label>
          <input type="text" className="inputt" placeholder="" />
        </div>
        <br />


        <div className="form-group">
          <label className="label">Código de confirmación</label>
          <input type="text" className="inputt" placeholder="" />
        </div>
        <br />
        <br />
        <button className="buttonn" onClick={handleLogin}>Enviar Código</button>
      </div>
    </div>
  );
}

export default EnviarCodigo;
