'use strict';

import React from 'react';
import {shallow} from 'enzyme';
import App from '../../../../src/main/js/components/app'
import Actions from '../../../../src/main/js/actions/tahrir-api-actions'

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        spyOn(Actions, 'getIdentity');
        wrapper = shallow(<App />);
    });

    it('updates the identity', () => {
        expect(Actions.getIdentity).toHaveBeenCalled();
    });

    it('renders the post form', () => {
        expect(wrapper.find('PostForm').length).toBe(1);
    });

    it('renders the navigator', () => {
        expect(wrapper.find('Navigator').length).toBe(1);
    });
});

