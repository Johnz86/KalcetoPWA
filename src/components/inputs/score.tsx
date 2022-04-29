import * as React from "react";

import './number.css';

type SubmitProps = {
    value: number;
    name: string;
    onChange: (value: number) => void;
}

export const ScoreNumber: React.SFC<SubmitProps> = (props) => {
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(Number(e.target.value));
    }
    return (<input type="number" name={props.name} value={props.value} min="0" max="10" onChange={change} className="c-number__input c-number__input--score" />);
};