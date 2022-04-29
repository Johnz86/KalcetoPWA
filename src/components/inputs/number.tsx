import * as React from "react";

import './number.css';

type SubmitProps = {
    value: number;
    onChange: (value: number) => void;
}

export const InputNumber: React.SFC<SubmitProps> = (props) => {
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(Number(e.target.value));
    }
    return (<input type="number" value={props.value} min="1" max="3" onChange={change} className="c-number__input"/>);
};