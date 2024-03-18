// LoginForm.jsx
import React from 'react';
import logoSimples from '../static/img/logos/logo_simplificada-1.svg';
import '../static/css/header.css';

const HeaderLayout = () => {
  return (
    <header>
        <form action="/enviar" method="POST" class="logo"><button><img src={logoSimples} alt="Logo Violeta (simplificada)" /></button></form>
    </header>
  );
};

export default HeaderLayout;