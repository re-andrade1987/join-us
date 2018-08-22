import React from 'react';
import './Header.css';


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
            </div>
        </section>
    )
}

export default Header