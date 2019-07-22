import React from 'react';
import { Router } from 'react-router-dom';
import history from '../../history';
import { mount, configure} from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

configure({ adapter: new Adapter() });

describe('Header', () => {
    it('renderiza correctamente', () => {
        const wrapper = mount(
            <Router history={history}>
                <Header />
            </Router>
        );

        expect(wrapper.find('li a')).toHaveLength(3);

        const resp1 = wrapper.find('li a').at(0).text().includes('Review');
        const resp2 = wrapper.find('li a').at(1).text().includes('Request');
        const resp3 = wrapper.find('li a').at(2).text().includes('Manage');
        expect(resp1).toEqual(true);
        expect(resp2).toEqual(true);
        expect(resp3).toEqual(true);
    });
});
