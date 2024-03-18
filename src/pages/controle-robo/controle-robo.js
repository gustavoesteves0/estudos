import React from 'react';
import controleRoboTxt from '../../static/img/controle-do-braco-robotico.svg';
import Home from '../../static/img/botoes/btHome.svg';
import Pos from '../../static/img/botoes/btPos.svg';
import LF from '../../static/img/botoes/btLF.svg';
import SLy from '../../static/img/botoes/btSLy.svg';
import Voltar from '../../static/img/botoes/btVoltar.svg';
import './controle-robo.css';

const ControleRobo = () => {
    return (
        <div className='displayControleRobo'>
            <img src={controleRoboTxt} alt='CONTROLE DO BRAÇO ROBÓTICO'/>
                <div className='buttonsControleRobo'>
                    <form action="/home"><button className='btCR'><img src={Home} alt='Home'/></button></form>
                    <form action="/pos"><button className='btCR'><img src={Pos} alt='Posição atual'/></button></form>
                    <form action="/fl"><button className='btCR'><img src={LF} alt='Ligar ferramenta'/></button></form>
                    <form action="/sly"><button className='btCR'><img src={SLy} alt='Selecionar Layout'/></button></form>
                    <button className='voltar'><img src={Voltar} alt='Voltar'/></button>
                </div>
        </div>
    );
};

export default ControleRobo;