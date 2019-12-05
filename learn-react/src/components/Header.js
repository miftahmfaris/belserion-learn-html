import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import MemberHeader from "./member/Header";
import GuestHeader from "./guest/Header";

function Header() {
    return (
        <Fragment>
            {JSON.parse(localStorage.getItem("token")) === null ? (
                <GuestHeader />
            ) : (
                <MemberHeader />
            )}
        </Fragment>
    );
}

export default withRouter(Header);
