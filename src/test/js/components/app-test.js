'use strict';

import React from 'react';
import {mount, shallow} from 'enzyme';
import App from '../../../../src/main/js/components/app'
import Actions from '../../../../src/main/js/actions/tahrir-api-actions'

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('updates the identity', () => {
        spyOn(Actions, 'getIdentity');
        spyOn(Actions, 'listBroadcastMessages');
        wrapper = mount(<App />);
        expect(Actions.getIdentity).toHaveBeenCalled();
    });

    it('renders the post form', () => {
        expect(wrapper.find('PostForm').length).toBe(1);
    });

    it('renders the navigator', () => {
        expect(wrapper.find('Navigator').length).toBe(1);
    });

    it('renders the header', () => {
       expect(wrapper.find('Header').length).toBe(1);
    });
});

