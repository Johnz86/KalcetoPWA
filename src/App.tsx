import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AddTeamForm } from './components/forms/add-team';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-body App-box">
          <div className="App-motive">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <h1>Kalčeto PWA</h1>
          <AddTeamForm players={[]} />
        </div>
      </div>
    );
  }
}

export default App;
