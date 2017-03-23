'use strict';

import Actions from "../../../main/js/actions/tahrir-api-actions";
import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import MicroblogPage from "../../../main/js/components/microblog-page";

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

