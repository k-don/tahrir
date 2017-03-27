'use strict';

import React from 'react';
import {shallow} from 'enzyme';
import Navigator from '../../../../src/main/js/components/navigator'

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Navigator />);
    });

    it('renders the navigation items', () => {
        expect(wrapper.find('NavItem').children().contains('All')).toBe(true);
        expect(wrapper.find('NavItem').children().contains('Following')).toBe(true);
        expect(wrapper.find('NavItem').children().contains('Mentions')).toBe(true);
    });

    it('shows the all selected by default', () => {
       expect(wrapper.find('Nav').prop('activeKey')).toBe(1);
    });

    describe('when mentions is clicked', () => {
        beforeEach(() => {
            wrapper.find('Nav').simulate('select', 3);
        });

        it('updates the mentions nav item as selected', () => {
            expect(wrapper.find('Nav').prop('activeKey')).toBe(3);
        });

    });

});

