import React, { Component } from 'react';
import Navbar from './Componentes/Navbar/Nav';
import Header from './Componentes/Header/Header';
import Main from './Componentes/Main/Main';


import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <Header />
      <Main />
      </div>
    );
  }
}

export default App;
