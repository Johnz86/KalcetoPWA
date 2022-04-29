import * as React from "react";
import './forms.css';
import { Submit } from "../inputs/submit";
import { Team, MatchResult } from "./types";
import { ScorePicker } from "../inputs/picker";
import { parseForm } from "./form-data";
import { CloseIcon } from "../icons/close";

type Props = {
    teams: Team[];
    onSubmit: (match: MatchResult) => void;
}

export class AddResultForm extends React.Component<Props> {

    submitted = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const teamForm = new FormData(event.target as HTMLFormElement);
        const result = { ...parseForm(teamForm), matchDate: new Date() } as MatchResult;
        if (result.guestTeam.length && result.homeTeam.length) {
            this.props.onSubmit({ ...parseForm(teamForm), matchDate: new Date() } as MatchResult);
        }
    }

    render() {
        const teams = this.props.teams.map((team, index) => ({ id: index.toString(), text: team.teamName }));
        return <div id="match" className="c-modal">
            <form className="c-form__card" onSubmit={this.submitted}>
                <div className="c-form__card--title">
                    <div className="c-form__title--text">
                        <label htmlFor="teamName">Zadaj výsledok zápasu</label>
                    </div>
                    <a href="#results" title="Close"><CloseIcon className="c-icon c-form__close" /></a>
                </div>
                <div className="c-form__row">
                    <ScorePicker name="home" placeholder="Domáci" list={teams} />
                    <span className="c-form_divider"> VS </span>
                    <ScorePicker name="guest" placeholder="Hostia" list={teams} />
                </div>
                <div className="c-form__submit">
                    <Submit text="Pridaj Výsledok" />
                </div>
            </form>
        </div>;
    }
}