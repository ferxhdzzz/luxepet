import React from 'react';
import './Login.css'; // <-- Asegúrate que importas tu CSS


function Login() {
  return (
    <div className="page">
      <div className="left-section">
        <img src="/luxe.svg" alt="Logo LuxePet" className="logo" />
        <p className="description">
          Bienvenido a LuxePet, el destino exclusivo para consentir a tu mascota. Inicia sesión para descubrir una selección de artículos diseñados para el bienestar de tu mascota.
        </p>

        <h2 className="title">Iniciar Sesión</h2>

        <div className="form-group">
          <label className="label">Usuario</label>
          <input type="text" className="input" placeholder="" />
        </div>

        <div className="form-group">
          <label className="label">Contraseña</label>
          <input type="password" className="input" placeholder="" />
        </div>

        <div className="link-container">
          <a href="/forgot-password" className="link">¿Olvidaste la contraseña?</a>
        </div>

        <button className="button-login">Iniciar sesión</button>

        <div className="register-container">
          <p>¿No tienes cuenta? <a href="/register" className="link">Regístrate</a></p>
        </div>
      </div>

      <div className="right-section">
  <img src="https://i.pinimg.com/736x/ee/77/c5/ee77c564dfc5c3d1ae92f6e6c4e980a0.jpg" alt="App Preview" className="right-image" />
</div>

    </div>
  );
}

export default Login;
