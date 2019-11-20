import React, { Component } from "react";
import axios from "axios";
import ComponentUnmount from "./ComponentUnmount";
import ComponentUpdate from "./ComponentUpdate";

export default class ComponentMount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "red",
            text: "Update",
            data: {}
        };
    }

    componentDidMount = () => {
        axios
            .get("https://api.github.com/users/miftahmfaris")
            .then(response => {
                this.setState({ data: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <ComponentUnmount />
                <p>this color is {this.state.color}</p>
                <p style={{ background: "red" }}>
                    {this.state.text !== "" && this.state.text}{" "}
                </p>
                <img src={this.state.data.avatar_url} alt="profile_picture" />
                <ComponentUpdate text={this.state.text} />
            </div>
        );
    }
}
