'use strict';

import React from "react";
import MicroblogPage from "./microblog-page"
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";

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

        return (
            <div className="navigator">
                <Nav bsStyle="tabs" activeKey={activeKey} onSelect={this.onSelect}>
                    <NavItem eventKey={1}>All</NavItem>
                    <NavItem eventKey={2}>Following</NavItem>
                    <NavItem eventKey={3}>Mentions</NavItem>
                </Nav>
                <MicroblogPage />
            </div>
        );
    }
}

module.exports = Navigator;

