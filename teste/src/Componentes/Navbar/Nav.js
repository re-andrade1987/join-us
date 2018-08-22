import React from 'react';
import logo from './logo.png'
import './Nav.css';

function Navbar(props) {
    return (
        <nav className="nav navbar navbar-expand-md fixed-top">
            <div className="container">
                <img className="Logomarca" src={logo} alt="Logo" />
            </div>
        </nav >
    )
}

export default Navbar