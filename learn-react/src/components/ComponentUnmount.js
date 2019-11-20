import React, { Component } from "react";

export default class ComponentUnmount extends Component {
    componentWillUnmount = () => {
        alert("the component unmount");
    };
    render() {
        return <div>Hello</div>;
    }
}
