'use strict';

import React from "react";
import Reflux from "reflux";
import MicroblogPage from "./microblog-page"
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";
import TahrirStore from '../stores/tahrir-api-store';
import {mentionsFilter} from "../helpers/microblog-filter";

class Navigator extends Reflux.Component {
    constructor(props) {
        super(props);
        this.state = {activeKey: 1};
        this.store = TahrirStore;
    }

    onSelect = (eventKey) => {
        this.setState({activeKey: eventKey})
    };

    render() {
        const {userIdentity: {nickname}, activeKey} = this.state;
        const filter = mentionsFilter(nickname);
        const tabs = {
            1: <MicroblogPage />,
            2: null,
            3: <MicroblogPage filter={filter} />
        };
        const display = tabs[activeKey];

        return (
            <div>
                <header>
                    <h1>Tahrir</h1>
                    <Nav bsStyle="pills" activeKey={activeKey} onSelect={this.onSelect}>
                        <NavItem eventKey={1}>All</NavItem>
                        <NavItem eventKey={2}>Following</NavItem>
                        <NavItem eventKey={3}>Mentions</NavItem>
                    </Nav>
                </header>
                <div className="content">
                    {display}
                </div>
            </div>
        );
    }
}

module.exports = Navigator;

