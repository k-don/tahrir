'use strict';

import Reflux from "reflux";
import React from "react";
import Modal from "react-bootstrap/lib/Modal";
import MicroblogPost from "./microblog-post";
import TahrirUIStore from "../stores/tahrir-ui-store"
import {authorFilter} from "../helpers/microblog-filter"
import UIActions from "../actions/tahrir-ui-actions"

class MicroblogAuthorPage extends Reflux.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.store = TahrirUIStore;
    }

    close = () => {
        UIActions.updateAuthorPage({nickname: null})
    };

    render() {
        const {authorPage: {nickname}} = this.state;
        const {microblogs = []} = this.props;
        const filter = authorFilter(nickname);
        const microblogPosts = microblogs
            .filter(filter)
            .map((microblog, i) => {
                return <MicroblogPost {...microblog} key={i} />
            });

        return (
            <Modal show={nickname !== null} onHide={this.close} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Posts {nickname} has made</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {microblogPosts}
                </Modal.Body>
            </Modal>
        );
    }
}

module.exports = MicroblogAuthorPage;

