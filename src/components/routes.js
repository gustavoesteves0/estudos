import React from 'react';
import '../pages/acesso-database/acesso-database.css';
import LoginForm from './formLogin';
import Selecione from '../pages/selecao/selecione';
import ControleRobo from '../pages/controle-robo/controle-robo';
import AcessoDatabase from '../pages/acesso-database/acesso-database';
import { BrowserRouter as Route, Routes} from 'react-router-dom';


const Rotas = () => {
    return (
        <Routes>
            <Route path='/' element={<LoginForm />}></Route>
            <Route path='/enviar' element={<Selecione />}></Route>
            <Route path='/controle-robo' element={<ControleRobo />}></Route>
            <Route path='/acesso-database' element={<AcessoDatabase />}></Route>
        </Routes>
    );
};

export default Rotas;