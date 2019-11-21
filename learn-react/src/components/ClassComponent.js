import React, { Component } from "react";
import axios from "axios";

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            data: []
        };
    }

    componentDidMount = () => {
        axios.get(process.env.REACT_APP_API_GITHUB).then(response => {
            this.setState({ data: response.data });
        });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button
                    onClick={() =>
                        this.setState({ count: this.state.count + 1 })
                    }
                >
                    +
                </button>
                <button
                    onClick={() =>
                        this.setState({ count: this.state.count - 1 })
                    }
                >
                    -
                </button>
                <button onClick={() => this.setState({ count: 0 })}>
                    Reset
                </button>
            </div>
        );
    }
}
