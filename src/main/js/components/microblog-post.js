'use strict';

import React from "react";
import UIActions from '../actions/tahrir-ui-actions';
import TimeAgo from 'javascript-time-ago'

TimeAgo.locale(require('javascript-time-ago/locales/en'));
require('javascript-time-ago/intl-messageformat-global');
require('intl-messageformat/dist/locale-data/en');

class MicroblogPost extends React.Component {
    onAuthorClick = (nickname) => {
        UIActions.updateAuthorPage({nickname})
    };

    render() {
        const {message, nickname, timeCreated} = this.props;
        const timeAgo = new TimeAgo('en-US');
        const twitterStyle = timeAgo.style.twitter();
        const readableTime = timeAgo.format(new Date(timeCreated), twitterStyle);

        return (
            <div className="microblog-post">
                <div>
                    <span onClick={this.onAuthorClick.bind(this, nickname)} className="microblog-nickname">{nickname}</span>
                    <span className="microblog-timestamp">{readableTime}</span>
                </div>
                <p className="microblog-message">{message}</p>
            </div>
        );
    }
}

module.exports = MicroblogPost;
