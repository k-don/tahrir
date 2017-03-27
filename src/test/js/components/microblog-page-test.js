'use strict';

import Actions from '../../../main/js/actions/tahrir-api-actions';
import React from 'react';
import MicroblogPage from '../../../main/js/components/microblog-page';
import {mount} from 'enzyme';

describe('MicroblogPage', () => {
    let wrapper;

    beforeEach(() => {
        spyOn(Actions, 'listBroadcastMessages');
        wrapper = mount(<MicroblogPage />);
        wrapper.setState({microblogs: [
            {message: 'This is the first message', nickname: 'nomel7', timeCreated: new Date().getTime()},
            {message: 'This is the second message', nickname: 'sanity', timeCreated: new Date(Date.now() - 60 * 1000).getTime()},
            {message: 'This is the third message', nickname: 'Default', timeCreated: new Date(Date.now() - 2 * 60 * 60 * 1000).getTime()}
        ]});
    });

    it('calls the listBroadcastMessages API', () => {
       expect(Actions.listBroadcastMessages).toHaveBeenCalled();
    });

    it('renders the microblog messages', () => {
        const wrappedMessages = wrapper.find('.microblog-message');
        expect(wrappedMessages.length).toBe(3);
        expect(wrappedMessages.get(0).textContent).toEqual('This is the first message');
        expect(wrappedMessages.get(1).textContent).toEqual('This is the second message');
        expect(wrappedMessages.get(2).textContent).toEqual('This is the third message');
    });

    it('renders the nicknames', () => {
        const wrappedNicknames = wrapper.find('.microblog-nickname');
        expect(wrappedNicknames.length).toBe(3);
        expect(wrappedNicknames.get(0).textContent).toEqual('nomel7');
        expect(wrappedNicknames.get(1).textContent).toEqual('sanity');
        expect(wrappedNicknames.get(2).textContent).toEqual('Default');
    });


    it('renders the timestamps', () => {
        const wrappedTimestamps = wrapper.find('.microblog-timestamp');
        expect(wrappedTimestamps.length).toBe(3);
        expect(wrappedTimestamps.get(0).textContent).toEqual('');
        expect(wrappedTimestamps.get(1).textContent).toEqual('1m');
        expect(wrappedTimestamps.get(2).textContent).toEqual('2h');
    });

    describe('when there is a filter', () => {
        beforeEach(() => {
            const filter = microblog => {
                return microblog.nickname === 'nomel7';
            };
            wrapper.setProps({filter});
        });

        it('only renders the microblogs for that filter', () => {
            const wrappedMessages = wrapper.find('.microblog-message');
            expect(wrappedMessages.length).toBe(1);
            expect(wrappedMessages.get(0).textContent).toEqual('This is the first message');
        });
    });
});

