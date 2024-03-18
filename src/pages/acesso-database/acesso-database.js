import React from 'react';
import acessoDeDadosTxt from '../../static/img/acesso-de-dados.svg';
import Layouts from '../../static/img/botoes/BtLayouts.svg';
import RA from '../../static/img/botoes/BtRA.svg';
import Voltar from '../../static/img/botoes/btVoltar.svg';
import './acesso-database.css';

const AcessoDatabase = () => {
    return (
        <div className='displayControleRobo'>
            <img src={acessoDeDadosTxt} alt='CONTROLE DO BRAÇO ROBÓTICO'/>
                <div className='buttonsControleRobo'>
                    <form action="/layouts"><button className='btCR'><img src={Layouts} alt='Home'/></button></form>
                    <form action="/registro-de-atividades"><button className='btCR'><img src={RA} alt='Posição atual'/></button></form>
                    <button className='voltar'><img src={Voltar} alt='Voltar'/></button>
                </div>
        </div>
    );
};

export default AcessoDatabase;