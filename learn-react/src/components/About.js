import React from "react";
import ClassComponent from "./ClassComponent";
import Hooks from "./Hooks";

export default function About() {
    return (
        <div>
            <p>Ini adalah about</p>
            <p>Hooks</p>
            <Hooks />
            <p>Class Component</p>
            <ClassComponent />
        </div>
    );
}
