import * as React from 'react';
import { InputSuggest } from '../inputs/suggest';
import { Submit } from '../inputs/submit';

import './forms.css';

interface InputOptions {
    id: string;
    text: string;
}

type Props = {
    teams: InputOptions[];
    players: InputOptions[];
};

type State = {
    teams: InputOptions[];
};

export class AddTeamForm extends React.Component<Props, State> {
    static defaultProps = {
        teams: [],
    };

    readonly state: State = {
        teams: this.props.teams,
    };

    componentWillReceiveProps({ teams }: Props) {
        if (teams != null && teams !== this.props.teams) {
            this.setState({ teams: teams });
        }
    }

    render() {

        return (
            <form>
                <div className="c-form__label">
                    <label htmlFor="teamName">Vytvor tím</label>
                </div>
                <div>
                    <InputSuggest name="teamName" placeholder="Meno tímu" list={this.state.teams} />
                </div>
                <div>
                    <InputSuggest name="playerOne" placeholder="Meno hráča" list={[]} />
                </div>
                <div>
                    <InputSuggest name="playerTwo" placeholder="Meno hráča" list={[]} />
                </div>
                <div className="c-form__submit">
                    <Submit text="Pridaj tím" />
                </div>
            </form>
        );
    }
}