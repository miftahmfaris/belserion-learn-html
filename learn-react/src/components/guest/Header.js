import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <ul
                style={{
                    display: "flex",
                    justifyContent: "center",
                    listStyleType: "none"
                }}
            >
                <li style={{ margin: "0 10px" }}>
                    <Link to="/signin">Sign In</Link>
                </li>
                <li style={{ margin: "0 10px" }}>
                    <Link to="/signup">Sign Up</Link>
                </li>
            </ul>
        </nav>
    );
}
