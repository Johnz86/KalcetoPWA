import * as React from "react";

import './suggest.css';
import { getStorageValue, setStorageValue } from "../../storage";

interface InputSuggestItem {
    id: string;
    text: string;
}

interface InputSuggestState {
    filterText: string;
    focused: boolean;
    picked: boolean;
    list: InputSuggestItem[];
}

interface InputSuggestProps {
    name: string;
    placeholder: string;
}

export class InputSuggest extends React.PureComponent<InputSuggestProps, InputSuggestState> {

    public readonly state: InputSuggestState = {
        filterText: "",
        focused: false,
        picked: false,
        list: []
    };
    private textInput = React.createRef<HTMLInputElement>();

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ filterText: event.target.value });
    };

    pickFromList = (text: string) => {
        this.setState({ filterText: text, picked: true, focused: false });
    }

    focus = () => {
        this.setState({ focused: true, list: getStorageValue(this.props.name) });
        setTimeout(this.focusTextInput, 200);
    }

    focusTextInput = () => {
        if (this.textInput && this.textInput.current) {
            this.textInput.current.focus();
        }
    }

    blur = () => {
        if (this.state.focused) {
            setTimeout(() => this.setState({ focused: false }), 200);
            this.addValue();
        }
    }

    addValue = () => {
        if (this.state.filterText && !this.state.list.some(item => item.text === this.state.filterText)) {
            setStorageValue(this.props.name, this.state.list.concat({
                id: `${this.state.list.length + 1}`,
                text: this.state.filterText
            }));
        }
    }

    render() {
        const filteredList = this.state.list.filter(
            item => item.text.includes(this.state.filterText)
        )

        return (
            <div className={this.state.focused && filteredList.length ? "c-dropdown is-open" : "c-dropdown"}>
                <input type="text" onChange={this.handleChange} className="c-button c-button--dropdown"
                    name={this.props.name} value={this.state.filterText}
                    placeholder={this.props.placeholder} onFocus={this.focus}
                    onBlur={this.blur} autoComplete="off" ref={this.textInput} />
                <ul className="c-dropdown__list">
                    {filteredList.map(item => <li className="c-dropdown__item" key={item.id} onClick={() => this.pickFromList(item.text)}>{item.text}</li>)}
                </ul>
            </div>
        );
    }
}

