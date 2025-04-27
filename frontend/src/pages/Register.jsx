import React from 'react';
import './Register.css'; // Sigue usando el mismo CSS

function register() {
  return (
    <div className="pagee">
      <div className="left-section">
        <img src="/luxe.svg" alt="Logo LuxePet" className="logo" />

        <p className="description">
          Bienvenido a LuxePet, donde el lujo y el cuidado de tu mascota se unen. Regístrate para comenzar a consentir a tu mejor amigo.
        </p>

        <h2 className="title">Crear Cuenta</h2>

        <div className="form-group">
          <label className="label">Nombre</label>
          <input type="text" className="input" placeholder="" />
        </div>

        <div className="form-group">
          <label className="label">Apellido</label>
          <input type="text" className="input" placeholder="" />
        </div>

        <div className="form-group">
          <label className="label">Usuario</label>
          <input type="text" className="input" placeholder="" />
        </div>

        <div className="form-group">
          <label className="label">Contraseña</label>
          <input type="password" className="input" placeholder="" />
        </div>

        <div className="form-group">
          <label className="label">Fecha de nacimiento</label>
          <input type="date" className="input" />
        </div>

        <button className="button-login">Ingresar</button>

        <div className="register-container">
          <p>¿Ya tienes una cuenta? <a href="/login" className="link">Iniciar sesión</a></p>
        </div>
      </div>
      
      <div className="right-section">
        <img src="https://i.pinimg.com/736x/ee/77/c5/ee77c564dfc5c3d1ae92f6e6c4e980a0.jpg" alt="App Preview" className="right-image" />
      </div>
    </div>
  );
}

export default register;