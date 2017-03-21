'use strict';

const PostForm = require('../../main/js/post-form');
const React = require('react');
const TestUtils = require('react-addons-test-utils');

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

});
