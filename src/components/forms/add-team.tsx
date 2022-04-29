import * as React from 'react';
import { InputSuggest } from '../inputs/suggest';
import { InputNumber } from '../inputs/number';
import { Submit } from '../inputs/submit';
import { parseForm } from './form-data';
import { Team } from './types';

import './forms.css';
import { CloseIcon } from '../icons/close';

interface InputOptions {
    id: string;
    text: string;
}

type Props = {
    onSubmit: (team: Team) => void;
};

type State = {
    teams: InputOptions[];
    playerCount: number;
};

export class AddTeamForm extends React.Component<Props, State> {

    readonly state: State = {
        teams: [],
        playerCount: 2
    };

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
            <div id="team" className="c-modal">
                <form className="c-form__card" onSubmit={this.submitted}>
                    <div className="c-form__card--title">
                        <div className="c-form__title--text">
                            <label htmlFor="teamName">Vytvor tím pre</label>
                            <InputNumber value={this.state.playerCount} onChange={this.setPlayerCount} />
                            <div>hráčov</div>
                        </div>
                        <a href="/KalcetoPWA/#results" title="Close"><CloseIcon className="c-icon c-form__close" /></a>
                    </div>
                    <div className="c-form__row ">
                        <InputSuggest name="teamName" placeholder="Meno tímu" />
                    </div>

                    {Array.from({ length: this.state.playerCount }, (player, index) =>
                        <div key={index} className="c-form__row" title={`${player}`}>
                            <InputSuggest name="players[]" placeholder="Meno hráča" />
                        </div>
                    )}
                    <div className="c-form__submit">
                        <Submit text="Pridaj tím" />
                    </div>
                </form>
            </div>
        );
    }
}