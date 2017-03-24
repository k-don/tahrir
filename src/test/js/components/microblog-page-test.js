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
            {message: 'This is the first message'},
            {message: 'This is the second message'},
            {message: 'This is the third message'}
        ]});
    });

    it('calls the listBroadcastMessages API', () => {
       expect(Actions.listBroadcastMessages).toHaveBeenCalled();
    });

    it('renders the microblog messages', () => {
        const wrappedMessages = wrapper.find('.microblog-message');
        expect(wrappedMessages.length).toBe(3);
        expect(wrappedMessages.contains(<p className="microblog-message">This is the first message</p>)).toBe(true);
        expect(wrappedMessages.contains(<p className="microblog-message">This is the second message</p>)).toBe(true);
        expect(wrappedMessages.contains(<p className="microblog-message">This is the third message</p>)).toBe(true);
    });
});

