import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tableau from './components/Tableau'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">c'est parti!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Tableau/>
      </div>
    );
  }
}

export default App;
