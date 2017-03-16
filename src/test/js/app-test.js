'use strict';

const App = require('../../main/js/app');
const React = require('react');
const TestUtils = require('react-addons-test-utils');

describe('App', function () {
    it('renders the app', function () {
        const component = TestUtils.renderIntoDocument(<App />);
        const {innerHTML} = TestUtils.findRenderedDOMComponentWithClass(component, 'app');
        expect(innerHTML).toBe('Hello, World!');
    });
});