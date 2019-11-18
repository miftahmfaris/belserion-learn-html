import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const logOut = () => {
        localStorage.removeItem("isLogin");
    };
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
                    <Link to="/">Home</Link>
                </li>
                <li style={{ margin: "0 10px" }}>
                    <Link to="/about">About</Link>
                </li>
                <li style={{ margin: "0 10px" }}>
                    <Link to="/contact">Contact</Link>
                </li>
                <li style={{ margin: "0 10px" }}>
                    <Link to="/users">Users</Link>
                </li>
                <li style={{ margin: "0 10px" }}>
                    <a href="#/" onClick={logOut}>
                        Log Out
                    </a>
                </li>
            </ul>
        </nav>
    );
}
