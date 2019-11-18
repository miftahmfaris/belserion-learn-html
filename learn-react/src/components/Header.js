import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";
import MemberHeader from "./member/Header";
import GuestHeader from "./guest/Header";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: false
        };
    }

    componentDidUpdate = () => {
        if (
            this.state.isLogin === JSON.parse(localStorage.getItem("isLogin"))
        ) {
            return;
        } else {
            this.setState({
                isLogin: JSON.parse(localStorage.getItem("isLogin"))
            });
        }
    };

    render() {
        return (
            <Fragment>
                {this.state.isLogin !== true ? (
                    <GuestHeader />
                ) : (
                    <MemberHeader />
                )}
            </Fragment>
        );
    }
}

export default withRouter(Header);
