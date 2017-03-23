const Reflux = require('reflux');
const Actions = require('../actions/tahrir-api-actions');

class TahrirApiStore extends Reflux.Store {
    constructor() {
        super();
        this.listenables = Actions;
        this.state = {microblogs: []};
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

    listBroadcastMessages() {
        this.setState({microblogs: [
            {message: 'This is the first message'},
            {message: 'This is the second message'},
            {message: 'This is the third message'}
        ]});
    }
}

module.exports = TahrirApiStore;
