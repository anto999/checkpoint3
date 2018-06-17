import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tableau from './components/Tableau'

class App extends Component {

    constructor(props){
      super(props);
      this.state = {
        targets: [
          {
              name: "Leia Organa",
              status: "alive",
              picture: "https://starwars-visualguide.com/assets/img/characters/5.jpg"
          },
          {
              name: "C-3PO",
              status: "alive",
              picture: "https://starwars-visualguide.com/assets/img/characters/2.jpg"
          },
          {
              name: "Biggs Darklighter",
              status: "dead",
              picture: "https://starwars-visualguide.com/assets/img/characters/9.jpg"
          }
      ]
      };
    }    

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
        <ul>{this.state.targets.map(target => <Tableau {...target}/>)}</ul>
      </div>
    );
  }
}

export default App;

//<li>{target.name} is {target.status}  :<img src ={target.picture}/>  <br/></li>)}
