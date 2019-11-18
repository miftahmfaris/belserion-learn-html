import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const CssTextField = withStyles({
    root: {
        "& .MuiFormControl-root": {
            display: "block !important",
            color: "blue"
        },
        "& .MuiFormLabel-root ": {
            display: "block",
            color: "blue"
        }
    }
})(TextField);

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        

        localStorage.setItem("user", JSON.stringify(this.state));
    };

    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <div>
                <form
                    noValidate
                    autoComplete="off"
                    onSubmit={this.handleSubmit}
                >
                    <CssTextField
                        required
                        label="First Name"
                        name="firstName"
                        defaultValue={this.state.name}
                        margin="normal"
                        onChange={this.handleChange}
                        fullWidth
                    />
                    <CssTextField
                        required
                        label="Last Name"
                        name="lastName"
                        defaultValue={this.state.name}
                        margin="normal"
                        onChange={this.handleChange}
                        fullWidth
                    />
                    <CssTextField
                        required
                        label="email"
                        name="email"
                        defaultValue={this.state.name}
                        margin="normal"
                        onChange={this.handleChange}
                        type="email"
                        fullWidth
                    />
                    <CssTextField
                        required
                        label="password"
                        name="password"
                        defaultValue={this.state.name}
                        margin="normal"
                        onChange={this.handleChange}
                        type="password"
                        fullWidth
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        );
    }
}
