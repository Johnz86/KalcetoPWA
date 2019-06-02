import * as React from "react";

import './suggest.css';

interface InputSuggestState {
    filterText: string;
    focused: boolean;
    picked: boolean;
}

interface InputSuggestItem {
    id: string;
    text: string;
}

interface InputSuggestProps {
    name: string;
    placeholder: string;
    list: InputSuggestItem[];
}

export class InputSuggest extends React.PureComponent<InputSuggestProps, InputSuggestState> {
    
    public state = {
        filterText: "",
        focused: false,
        picked: false
    };
    private textInput = React.createRef<HTMLInputElement>();

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ filterText: event.target.value });
    };

    pickFromList = (text: string) => {
        this.setState({ filterText: text, picked: true, focused: false });
    }

    focus = () => {
        this.setState({ focused: true });
        setTimeout(this.focusTextInput, 200);
    }

    focusTextInput = () => {
        if(this.textInput && this.textInput.current) {
            this.textInput.current.focus();
        }
    }

    blur = () => {
        if (this.state.focused) {
            setTimeout(() => this.setState({ focused: false }), 200);
        }
    }

    render() {
        const filteredList = this.props.list.filter(
            item => item.text.includes(this.state.filterText)
        )

        return (
            <div className={this.state.focused && filteredList.length ? "c-dropdown is-open" : "c-dropdown"}>
                <input onChange={this.handleChange} className="c-button c-button--dropdown" name={this.props.name} value={this.state.filterText} placeholder={this.props.placeholder} onFocus={this.focus} onBlur={this.blur} autoComplete="off" ref={this.textInput}/> 
                <ul className="c-dropdown__list">
                    {filteredList.map(item => <li className="c-dropdown__item" key={item.id} onClick={() => this.pickFromList(item.text)}>{item.text}</li>)}
                </ul>
            </div>
        );
    }
}

