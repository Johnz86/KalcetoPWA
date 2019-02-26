import * as React from 'react';
import { InputSuggest } from '../inputs/suggest';
import { Submit } from '../inputs/submit';

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
        teams: [{ id: "1", text: "Team Super" }, { id: "2", text: "Badasses" }, { id: "3", text: "Weaklings" }],
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
                <div>
                    <label htmlFor="teamName">Výber tímu</label>
                </div>
                <div>
                    <InputSuggest name="teamName" placeholder="Meno tímu" list={this.state.teams} />
                </div>
                <div>
                    <InputSuggest name="playerOne" placeholder="Meno hráča" list={[{ id: "1", text: "Peter" }, { id: "2", text: "John" }]} />
                </div>
                <div>
                    <InputSuggest name="playerTwo" placeholder="Meno hráča" list={[{ id: "1", text: "Peter" }, { id: "2", text: "John" }]} />
                </div>
                <Submit text="Pridaj tím"/>
            </form>
        );
    }
}