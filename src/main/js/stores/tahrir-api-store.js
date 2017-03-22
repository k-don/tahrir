const Reflux = require('reflux');
const Actions = require('../actions/tahrir-api-actions');

class TahrirApiStore extends Reflux.Store {
    constructor() {
        super();
        this.listenables = Actions;
    }

    postBroadcastMessage(message) {
        const client = new XMLHttpRequest();
        client.open('POST', '/api/broadcastMessages', false);
        client.setRequestHeader('Content-Type', 'application/json');
        client.send(JSON.stringify({message}));
        if (client.status !== 201) {
            console.error('Error posting microblog');
        }
    }
}

module.exports = TahrirApiStore;
