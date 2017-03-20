'use strict';

const PostForm = require('../../main/js/post-form');
const React = require('react');
const TestUtils = require('react-addons-test-utils');

describe('PostForm', function () {
    it('renders the form', function () {
        const component = TestUtils.renderIntoDocument(<PostForm />);
        const {innerHTML} = TestUtils.findRenderedDOMComponentWithClass(component, 'app');
        expect(innerHTML).toContain('<textarea>');
    });
});
