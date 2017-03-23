'use strict';

const React = require('react');
const Actions = require('../actions/tahrir-api-actions');
const Reflux = require('reflux');
const TahrirStore = require('../stores/tahrir-api-store');

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
            const {message} = microblog;
            return (
                <div className="microblog-post" key={i}>
                    <p className="microblog=message">{message}</p>
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
