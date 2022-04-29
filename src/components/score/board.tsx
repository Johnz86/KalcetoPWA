import React from "react";
import { MatchResult } from "../forms/types";
import { AddScoreIcon } from "../icons/score";
import { TeamIcon } from "../icons/team";
import "./board.css";
import "../icons/icon.css";

type Props = {
    matches: MatchResult[];
    addScore: () => void;
    addTeam: () => void;
}

export class ScoreBoard extends React.Component<Props> {
    render() {
        return this.props.matches && <div className="c-score__board">
            <div className="c-score__header">
                <div className="c-score--title"> Výsledky zápasov v kalčete</div>
                <div className="c-score__header--buttons">
                    <span className="c-button__install">Install</span>
                    <a href="/KalcetoPWA/#match"><AddScoreIcon className="c-icon" onClick={this.props.addScore} /></a>
                    <a href="/KalcetoPWA/#team"><TeamIcon className="c-icon" onClick={this.props.addTeam} /></a>
                </div>
            </div>
            <div className="c-score__content">
                {this.props.matches.reverse().map((match, index) => <div key={index} className="c-score__row">
                    <div className="c-home">
                        <div className="c-team">{match.homeTeam}</div>
                        <div className="c-score">{match.homeScore}</div>
                    </div>
                    <div className="c-guest">
                        <div className="c-score">{match.guestScore}</div>
                        <div className="c-team">{match.guestTeam}</div>
                    </div>
                </div>)}
            </div>
        </div>
    }
}