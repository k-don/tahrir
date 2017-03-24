'use strict';

import React from 'react';
import Reflux from 'reflux';
import Actions from '../actions/tahrir-api-actions';
import TahrirStore from '../stores/tahrir-api-store';

class MicroblogPage extends Reflux.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.store = TahrirStore;
    }

    componentDidMount() {
        Actions.listBroadcastMessages();
    }

    render() {
        const microblogPosts = this.state.microblogs.map((microblog, i) => {
            const {message, nickname} = microblog;
            return (
                <div className="microblog-post" key={i}>
                    <div>
                        <span className="microblog-nickname">{nickname}</span>
                    </div>
                    <p className="microblog-message">{message}</p>
                </div>
            );
        });

        return (
            <div className="microblog-posts">
                {microblogPosts}
            </div>
        )
    }
}

module.exports = MicroblogPage;
