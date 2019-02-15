import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Kalčeto PWA</h1>
          <form>
            <div>
              <label htmlFor="homeTeam">Awesome</label>
              <span> VS </span>
              <label htmlFor="guestTeam">Cruel</label>
            </div>
            <div>
              <input type="number" name="homeTeam" min="1" max="10" step="1" defaultValue="0" />
              <span>:</span>
              <input type="number" name="guestTeam" min="1" max="10" step="1" defaultValue="0" />
            </div>
            <button type="submit">Pridaj Výsledok</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
