import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AddTeamForm } from './components/forms/add-team';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Kalčeto PWA</h1>
          <AddTeamForm players={[]} />
        </header>
      </div>
    );
  }
}

export default App;
