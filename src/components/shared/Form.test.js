import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Form from './Form';
import Select from './Select';

configure({ adapter: new Adapter() });

describe('Form', () => {
    it('guarda los datos del field', () => {
        const saveField = jest.fn();
        const prevent = jest.fn();
        const wrapper = shallow(<Form field={{}} saveField={saveField} />);

        wrapper
            .find('input')
            .at(0)
            .simulate('change', { target: { value: 'nombre' } });

        wrapper
            .find('textarea')
            .at(0)
            .simulate('change', { target: { value: 'descripcion' } });

        wrapper
            .find(Select)
            .at(0)
            .simulate('change', 'integer');

        wrapper
            .find('input')
            .at(1)
            .simulate('change', { target: { value: true } });

        wrapper
            .find('form')
            .simulate('submit', { preventDefault: prevent })

        expect(prevent.mock.calls).toEqual([[]]);
        expect(saveField.mock.calls).toEqual([
            [{
                name: 'nombre',
                description: 'descripcion',
                type: 'integer',
                sensitivity: true,
            }]
        ]);
    });
});
