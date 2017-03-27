'use strict';

import React from 'react';
import Reflux from 'reflux';
import Actions from '../actions/tahrir-api-actions';
import TahrirStore from '../stores/tahrir-api-store';
import TimeAgo from 'javascript-time-ago'

TimeAgo.locale(require('javascript-time-ago/locales/en'));
require('javascript-time-ago/intl-messageformat-global');
require('intl-messageformat/dist/locale-data/en');

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
        const timeAgo = new TimeAgo('en-US');
        const twitterStyle = timeAgo.style.twitter();

        const microblogPosts = this.state.microblogs.map((microblog, i) => {
            const {message, nickname, timeCreated} = microblog;
            const readableTime = timeAgo.format(new Date(timeCreated), twitterStyle);
            return (
                <div className="microblog-post" key={i}>
                    <div>
                        <span className="microblog-nickname">{nickname}</span>
                        <span className="microblog-timestamp">{readableTime}</span>
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
