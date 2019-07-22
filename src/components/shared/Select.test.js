import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Select from './Select';

configure({ adapter: new Adapter() });

describe('Select', () => {
    const values = ['uno', 'dos', 'tres'];
    const onChange = jest.fn();
    const wrapper = shallow(<Select values={values} onChange={onChange} /> );

    it('renders blank option', () => {
        const resp = wrapper.find('option').at(0).text().includes('Seleccionar');
        expect(resp).toEqual(true);
    });

    it('renders all options', () => {
        expect(wrapper.find('option')).toHaveLength(values.length + 1);
    });

    it('calls onChange element', () => {
        wrapper
            .find('select')
            .at(0)
            .simulate('change', { target: { value: 'uno' } });

        expect(onChange.mock.calls).toEqual([['uno']]);
    });
});