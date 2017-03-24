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
            () => {
                const {microblogs} = this.state;
                microblogs.unshift({message});
                this.setState({microblogs});
            },
            () => {
                console.error('Error posting microblog');
            }
        );
    }

    listBroadcastMessages() {
        const client = Rest.wrap(errorCode, {code: 201});
        client({
            method: 'GET',
            path: '/api/broadcastMessages',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            response => {
                const {entity} = response;
                this.setState({microblogs: JSON.parse(entity)});
            },
            () => {
                console.error('Error loading microblogs');
            }
        );
    }
}

module.exports = TahrirApiStore;
