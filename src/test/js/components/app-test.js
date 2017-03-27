'use strict';

import React from 'react';
import {shallow} from 'enzyme';
import App from '../../../../src/main/js/components/app'

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('renders the post form', () => {
        expect(wrapper.find('PostForm').length).toBe(1);
    });

    it('renders the navigator', () => {
        expect(wrapper.find('Navigator').length).toBe(1);
    });
});

