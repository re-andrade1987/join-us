import React, { Component } from 'react';
import Navbar from './Componentes/Navbar/Nav';
import Header from './Componentes/Header/Header';
import Main from './Componentes/Main/Main';
import Section from './Componentes/Section/Section';
import './App.css';



class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <Header />
      <Main /> 
      <Section /> 
      </div>
    );
  }
}

export default App;
