import React from 'react';
import './Header.css';
import busca from './busca.png'


function Header(props) {
    return (
        <section>
            <div className="container">
                <div className="header">
                    <a href="#">Entrar</a>
                    <a href="#">Cadastre-se</a>
                </div>
                <div className="lista">
                    <ul>
                        <li>SAPATOS</li>
                        <li>BOLSAS</li>
                        <li>ACESSÓRIOS</li>
                        <li>OFF</li>
                    </ul>
                </div>
                <div className="input1">
                    <img src={busca} alt="lupa de busca" />
                    <label><input type="text"></input>Busca</label>
                </div>
            </div>
        </section>
    )
}

export default Header