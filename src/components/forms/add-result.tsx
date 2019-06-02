import * as React from "react";
import './forms.css';
import { Submit } from "../inputs/submit";
import { ScoreNumber } from "../inputs/score";
import { Team } from "./types";
import { InputSuggest } from "../inputs/suggest";

type Props = {
    teams: Team[];
}

type State = {
    homeScore: number;
    guestScore: number;
}

export class AddResultForm extends React.Component<Props, State> {
    readonly state: State = {
        homeScore: 0,
        guestScore: 0
    };

    setHomeScore = (count: number) => {
        this.setState({ ...this.state, homeScore: count });
    }

    setGuestScore = (count: number) => {
        this.setState({ ...this.state, guestScore: count });
    }
    
    render() {
        const teams = this.props.teams.map((team, index) => ({id: index.toString(), text: team.teamName}));
        return <form className="c-form__card">
            <div className="c-form__card--title">
                <label htmlFor="teamName">Zadaj výsledok zápasu</label>
            </div>
            <div className="c-form__row">
                <InputSuggest name="homeTeam" placeholder="Domáci" list={teams} />
                <span> VS </span>
                <InputSuggest name="guestTeam" placeholder="Hostia" list={teams} />
            </div>
            <div className="c-form__row">
                <ScoreNumber name="homeTeam" value={this.state.homeScore} onChange={this.setHomeScore} />
                <span>:</span>
                <ScoreNumber name="guestTeam" value={this.state.guestScore} onChange={this.setGuestScore} />
            </div>
            <div className="c-form__submit">
                <Submit text="Pridaj Výsledok" />
            </div>
        </form>;
    }
}