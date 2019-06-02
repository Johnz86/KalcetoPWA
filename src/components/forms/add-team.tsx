import * as React from 'react';
import { InputSuggest } from '../inputs/suggest';
import { InputNumber } from '../inputs/number';
import { Submit } from '../inputs/submit';
import { parseForm } from './form-data';
import { Team } from './types';

import './forms.css';

interface InputOptions {
    id: string;
    text: string;
}

type Props = {
    teams: InputOptions[];
    players: InputOptions[];
    playerCount: number;
    onSubmit: (team: Team) => void;
};

type State = {
    teams: InputOptions[];
    playerCount: number;
};

export class AddTeamForm extends React.Component<Props, State> {
    static defaultProps = {
        teams: [{ id: "1", text: "Team Super" }, { id: "2", text: "Badasses" }, { id: "3", text: "Weaklings" }],
        playerCount: 2
    };

    readonly state: State = {
        teams: this.props.teams,
        playerCount: this.props.playerCount
    };

    componentWillReceiveProps({ teams }: Props) {
        if (teams != null && teams !== this.props.teams) {
            this.setState({ ...this.state, teams: teams });
        }
    }

    submitted = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const teamForm = new FormData(event.target as HTMLFormElement);
        this.props.onSubmit(parseForm(teamForm) as Team);
    }

    setPlayerCount = (count: number) => {
        this.setState({ ...this.state, playerCount: count });
    }

    render() {
        return (
            <form className="c-form__card" onSubmit={this.submitted}>
                <div className="c-form__card--title">
                    <label htmlFor="teamName">Vytvor tím pre</label>
                    <InputNumber value={this.state.playerCount} onChange={this.setPlayerCount} />
                    <div>hráčov</div>
                </div>
                <div className="c-form__row ">
                    <InputSuggest name="teamName" placeholder="Meno tímu" list={this.state.teams} />
                </div>

                {Array.from({ length: this.state.playerCount }, (player, index) =>
                    <div key={index} className="c-form__row" title={`${player}`}>
                        <InputSuggest name="players[]" placeholder="Meno hráča" list={[{ id: "1", text: "Peter" }, { id: "2", text: "John" }]} />
                    </div>
                )}
                <div className="c-form__submit">
                    <Submit text="Pridaj tím" />
                </div>
            </form>
        );
    }
}