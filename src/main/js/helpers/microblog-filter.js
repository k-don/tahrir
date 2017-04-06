'use strict';

module.exports = {
    mentionsFilter: (mentions) => {
        return microblog => {
            const regex = new RegExp(mentions);
            const {message} = microblog;
            return message.match(regex);
        };
    },

    authorFilter: (author) => {
        return microblog => {
            return microblog.nickname === author;
        };
    }
};
