import React, { Component } from 'react';
import './App.css';
import { AddTeamForm } from './components/forms/add-team';
import { Team, MatchResult } from './components/forms/types';
import { AddResultForm } from './components/forms/add-result';
import { ScoreBoard } from './components/score/board';
import { getStorageValue, setStorageValue } from './storage';

type State = {
    teams: Team[];
    matches: MatchResult[];
}

class App extends Component<{}, State> {
    readonly state: State = {
        teams: [],
        matches: []
    };

    hydrateStateWithLocalStorage() {
        this.setState({
            teams: getStorageValue("teams"),
            matches: getStorageValue("matches")
        })
        setTimeout(this.navigateOnEmpty, 200);
    }

    navigateOnEmpty = () =>{
        if (this.state.teams.length > 1) {
            this.showScoreForm();
        } else {
            this.showTeamForm();
        }
    }

    componentDidMount() {
        this.hydrateStateWithLocalStorage();
    }

    teamAdded = (team: Team) => {
        if (this.state.teams.length > 0) {
            this.showScoreForm();
        }
        if (team.teamName && team.players.length) {
            const teams = this.state.teams.concat(team);
            this.setState({ teams: teams });
            setStorageValue("teams", teams);
        }
    }

    matchAdded = (match: MatchResult) => {
        const matches = this.state.matches.concat(match);
        this.setState({ matches: matches });
        setStorageValue("matches", matches);
    }

    showScoreForm = () => {
        location.href = "/#match";
    }

    showTeamForm = () => {
        location.href = "/#team";
    }

    render() {
        return (
            <div className="App">
                <div className="App-body">
                    <AddTeamForm onSubmit={this.teamAdded} />
                    <AddResultForm teams={this.state.teams}
                        onSubmit={this.matchAdded} />
                    <ScoreBoard matches={this.state.matches}
                        addScore={this.showScoreForm}
                        addTeam={this.showTeamForm} />
                </div>
            </div>
        );
    }
}

export default App;
