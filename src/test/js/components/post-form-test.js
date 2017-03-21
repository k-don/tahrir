'use strict';

const React = require('react');
const TestUtils = require('react-addons-test-utils');
const PostForm = require('../../../main/js/components/post-form');
const Actions = require('../../../main/js/actions/tahrir-api-actions');

describe('PostForm', function () {
    let component;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<PostForm />);
    });

    it('renders the form', () => {
        const domComponent = TestUtils.findRenderedDOMComponentWithTag(component, 'textarea');
        expect(domComponent).toBeDefined();
    });

    it('renders the button', () => {
        const domComponent = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
        expect(domComponent).toBeDefined();
    });

    describe('when the post button is clicked', () => {
        beforeEach(() => {
            spyOn(Actions, 'postBroadcastMessage');
            const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
            TestUtils.Simulate.click(button);
        });

        it('posts a message', () => {
            expect(Actions.postBroadcastMessage).toHaveBeenCalled();
        })
    });


});
