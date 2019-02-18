import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { InputStored } from './components/input-stored';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Kalčeto PWA</h1>
          <form>
            <div>
              <label htmlFor="teamName">Meno tímu</label>
            </div>
            <div>
              <InputStored name="teamName" placeholder="Meno tímu" list={[{id: "1", text: "Team Super"}, {id: "2", text: "Badasses"},]} />
            </div>
            <div>
              <input type="text" name="playerOne" placeholder="Meno prvého hráča" />
            </div>
            <div>
              <input type="text" name="playerTwo" placeholder="Meno druhého hráča" />
            </div>                        
            <button type="submit">Pridaj Tím</button>
          </form>          
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
