import * as React from "react";

import './submit.css';

type SubmitProps = {
    text: string;
}

export const Submit: React.SFC<SubmitProps> = (props) => {
    return (<button className="material-button" type="submit">{props.text}</button>);
};