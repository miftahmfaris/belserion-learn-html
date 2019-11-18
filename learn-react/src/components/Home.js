import React from "react";
import { Redirect } from "react-router-dom";

export default function Home() {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));

    return (
        <div>
            {isLogin ? <p>Ini adalah Home</p> : <Redirect to="/signin" />}
        </div>
    );
}
