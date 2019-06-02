import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AddTeamForm } from './components/forms/add-team';
import { Team } from './components/forms/types';
import { AddResultForm } from './components/forms/add-result';

type State = {
  teams: Team[];
}

class App extends Component<{}, State> {
  readonly state: State = {
    teams: []
  };
  chooseTeam = (team: Team) => {
    if (team.teamName && team.players.length) {
      this.setState({ teams: this.state.teams.concat(team) });
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <div className="App-motive">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <h1>Kalčeto PWA</h1>
          {this.state.teams.length > 1 ? <AddResultForm teams={this.state.teams} /> :
            <AddTeamForm players={[]} onSubmit={this.chooseTeam} />}
        </div>
      </div>
    );
  }
}

export default App;
