import React, { Component } from "react";

export default class ComponentUpdate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        };
    }

    componentDidUpdate = prevProps => {
        if (prevProps.text !== this.state.text) {
            return null;
        }
    };
    render() {
        return (
            <div>
                <p>Component Update {this.state.text}</p>
            </div>
        );
    }
}
