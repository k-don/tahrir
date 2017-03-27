'use strict';

import {mentionsFilter} from '../../../main/js/helpers/microblog-filter';
import partialRight from 'lodash.partialright'

describe('microblogFilter', () => {
    describe('#mentionsFilter', () => {
        let microblogs;

        beforeEach(() => {
            microblogs = [
                {message: 'This is the first message', nickname: 'nomel7', timeCreated: new Date().getTime()},
                {message: 'Mention for @user1here here', nickname: 'sanity', timeCreated: new Date(Date.now() - 60 * 1000).getTime()},
                {message: 'This is the third message which mentions @nomel', nickname: 'Default', timeCreated: new Date(Date.now() - 2 * 60 * 60 * 1000).getTime()}
            ];
        });

        it('filters messages with a user mentioned', () => {
            const filter = partialRight(mentionsFilter, '@nomel');
            const result = microblogs.filter(filter);
            expect(result.length).toBe(1);
            expect(result[0].message).toBe('This is the third message which mentions @nomel');
        });

        it('filters messages with a user mentioned that contains numbers', () => {
            const filter = partialRight(mentionsFilter, '@user1here');
            const result = microblogs.filter(filter);
            expect(result.length).toBe(1);
            expect(result[0].message).toBe('Mention for @user1here here');
        });

    });
});
