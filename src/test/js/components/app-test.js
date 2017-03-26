'use strict';

import React from 'react';
import {mount} from 'enzyme';
import App from '../../../../src/main/js/components/app'

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<App />);
    });

    it('renders the post form', () => {
        expect(wrapper.find('.post-form').length).toBe(1);
    });

});

