'use strict';

import Reflux from "reflux";
import Actions from "../actions/tahrir-api-actions";
import Rest from "rest";
import errorCode from "rest/interceptor/errorCode";

class TahrirApiStore extends Reflux.Store {
    constructor() {
        super();
        this.listenables = Actions;
        this.state = {microblogs: []};
    }

    postBroadcastMessage(message) {
        const client = Rest.wrap(errorCode, {code: 202});
        client({
            method: 'POST',
            path: '/api/broadcastMessages',
            entity: JSON.stringify({message}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            () => {/* success */},
            () => {
                console.error('Error posting microblog');
            }
        );
    }

    listBroadcastMessages() {
        this.setState({microblogs: [
            {message: 'This is the first message'},
            {message: 'This is the second message'},
            {message: 'This is the third message'}
        ]});
    }
}

module.exports = TahrirApiStore;
