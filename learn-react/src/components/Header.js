import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import MemberHeader from "./member/Header";
import GuestHeader from "./guest/Header";

function Header() {
    return (
        <Fragment>
            {JSON.parse(localStorage.getItem("isLogin")) !== true ? (
                <GuestHeader />
            ) : (
                <MemberHeader />
            )}
        </Fragment>
    );
}

export default withRouter(Header);
