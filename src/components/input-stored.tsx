import * as React from "react";

import './style.css';

interface InputState {
    filterText: string;
    focused: boolean;
    picked: boolean;
}

interface InputItem {
    id: string;
    text: string;
}

interface InputProps {
    name: string;
    placeholder: string;
    list: InputItem[];
}

export class InputStored extends React.PureComponent<InputProps, InputState> {
    // State only needs to hold the current filter text value:
    public state = {
        filterText: "",
        focused: false,
        picked: false
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ filterText: event.target.value });
    };

    pickFromList = (text: string) => {
        this.setState({ filterText: text, picked: true, focused: false });
    }

    focus = () => {
        this.setState({ focused: true });
    }

    blur = () => {
        if (this.state.focused) {
            setTimeout(() => this.setState({ focused: false }), 200);
        }
    }

    render() {
        // The render method on this PureComponent is called only if
        // props.list or state.filterText has changed.
        const filteredList = this.props.list.filter(
            item => item.text.includes(this.state.filterText)
        )

        return (
            <div className="dropdown">
                <input onChange={this.handleChange} name={this.props.name} value={this.state.filterText}
                    placeholder={this.props.placeholder} onFocus={this.focus} onBlur={this.blur} />
                <ul className={this.state.focused && filteredList.length ? "dropdown-content" : "hide"}>
                    {filteredList.map(item => <li key={item.id} onClick={(event) => { event.preventDefault(); this.pickFromList(item.text) }}>{item.text}</li>)}
                </ul>
            </div>
        );
    }
}

