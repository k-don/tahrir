'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const MicroblogPage = require('../../../main/js/components/microblog-page');
const Actions = require('../../../main/js/actions/tahrir-api-actions');

describe('MicroblogPage', () => {
    let component;
    let renderedDom;

    beforeEach(() => {
        spyOn(Actions, 'listBroadcastMessages');
        component = TestUtils.renderIntoDocument(<MicroblogPage />);
        component.store = {microblogs: [
            {message: 'This is the first message'},
            {message: 'This is the second message'},
            {message: 'This is the third message'}
        ]};
        renderedDom = () => ReactDOM.findDOMNode(component);
    });

    it('calls the listBroadcastMessages API', () => {
       expect(Actions.listBroadcastMessages).toHaveBeenCalled();
    });

    it('renders the microblog messages', () => {
        const renderedMessages = renderedDom().querySelectorAll('p');
        expect(renderedMessages.length).toBe(3);
        expect(renderedMessages[0].textContent).toBe('This is the first message');
        expect(renderedMessages[1].textContent).toBe('This is the second message');
        expect(renderedMessages[2].textContent).toBe('This is the third message');
    });
});

