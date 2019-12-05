import React from "react";
import { Redirect } from "react-router-dom";

export default function Home() {
    const token = JSON.parse(localStorage.getItem("token"));

    return (
        <div>{token ? <p>Ini adalah Home</p> : <Redirect to="/signin" />}</div>
    );
}
