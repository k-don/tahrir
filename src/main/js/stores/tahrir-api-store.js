const Reflux = require('reflux');
const Actions = require('../actions/tahrir-api-actions');

class TahrirApiStore extends Reflux.Store {
    constructor() {
        super();
        this.listenables = Actions;
    }

    postBroadcastMessage() {
        console.log('message posted to store');
    }
}

module.exports = TahrirApiStore;
