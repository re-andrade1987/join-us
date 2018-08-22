import React, { Component } from 'react';
import Navbar from './Componentes/Navbar/Nav';
import Header from './Componentes/Header/Header';
import Input from './Componentes/Input/Input';

import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <Header />
      <Input />
      </div>
    );
  }
}

export default App;
