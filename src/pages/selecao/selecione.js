// LoginForm.jsx
import React from 'react';
import controleBr from '../../static/img/botoes/BtRobo.svg';
import controleDb from '../../static/img/botoes/BtDatabase.svg';
import './selecao.css';

const Selecione = () => {
    return (
        <div className='selecao'>
            <form action="/selecao-db" method="post" class="divLogin">
                <button class="selecionavel" method="GET"><img src={controleDb} alt='Acessar banco de dados'/></button>
            </form>
            <form action="/selecao-cr" method="post" class="divLogin">
                <button class="selecionavel" method="GET"><img src={controleBr} alt='Controlar braço robótico' /></button>
            </form>
        </div>
    );
};

export default Selecione;