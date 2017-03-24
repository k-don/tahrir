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
            {message: 'This is the first message', nickname: 'nomel7'},
            {message: 'This is the second message', nickname: 'sanity'},
            {message: 'This is the third message', nickname: 'Default'}
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
});

