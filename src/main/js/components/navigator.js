'use strict';

import React from "react";
import MicroblogPage from "./microblog-page"
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";
import {mentionsFilter} from "../helpers/microblog-filter";

class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeKey: 1};
    }

    onSelect = (eventKey) => {
        this.setState({activeKey: eventKey})
    };

    render() {
        const {activeKey} = this.state;
        const {userIdentity: {nickname}} = this.props;
        const filter = mentionsFilter(nickname);
        const tabs = {
            1: <MicroblogPage />,
            2: null,
            3: <MicroblogPage filter={filter} />
        };
        const display = tabs[activeKey];

        return (
            <div className="navigator">
                <Nav bsStyle="tabs" activeKey={activeKey} onSelect={this.onSelect}>
                    <NavItem eventKey={1}>All</NavItem>
                    <NavItem eventKey={2}>Following</NavItem>
                    <NavItem eventKey={3}>Mentions</NavItem>
                </Nav>
                {display}
            </div>
        );
    }
}

module.exports = Navigator;

