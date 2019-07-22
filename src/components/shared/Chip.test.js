import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Chip, { CHIP_STATES } from './Chip';

configure({ adapter: new Adapter() });

describe('Chip', () => {
    it('renderiza chip con state valido', () => {
        const stateName = CHIP_STATES[1];
        const wrapper = shallow(<Chip state={1} />);
        const result = wrapper.find('span').text().includes(stateName);

        expect(result).toEqual(true);
    });

    it('renderiza chip con state invalido', () => {
        const stateName = CHIP_STATES[1]; // Default state
        const wrapper = shallow(<Chip state={5} />);
        const result = wrapper.find('span').text().includes(stateName);

        expect(result).toEqual(true);
    });
});