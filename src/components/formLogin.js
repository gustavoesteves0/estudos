// formLogin.jsx
import React from 'react';
import logoCompleta from '../static/img/logos/logo_completa_1.svg';
import { useHref } from 'react-router-dom'

function Enviar() {
  useHref('/enviar');
}

function LoginForm() {
  return (
    <div className='divMaior'>
      <img src={logoCompleta} className="logoCompleta" alt='Logo Grupo Violeta' />
      <form action='/enviar' className='divLogin'>
        <input type="email" placeholder='E-Mail' className="Login" />
        <br />
        <input type="password" placeholder='Senha' className="Login" />
        <br />
        <button onClick={Enviar} type="submit" className="btLogin" >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;