'use strict';

import Reflux from "reflux";

const TahrirActions = Reflux.createActions([
    'postBroadcastMessage',
    'listBroadcastMessages',
    'getIdentity',
    'postIdentity'
]);

module.exports = TahrirActions;
