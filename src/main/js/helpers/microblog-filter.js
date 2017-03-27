'use strict';

module.exports = {
    mentionsFilter: (microblog, i, arr, mentions) => {
        const regex = new RegExp(mentions);
        const {message} = microblog;
        return message.match(regex);
    }
};
