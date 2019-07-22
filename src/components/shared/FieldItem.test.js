import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FieldItem from './FieldItem';

configure({ adapter: new Adapter() });

describe('FieldItem', () => {
    it('renderiza field item', () => {
        const title = 'titulo';
        const content = 'contenido';
        const wrapper = shallow(<FieldItem title={title} content={content} />);

        expect(wrapper.text().includes(title));
        expect(wrapper.text().includes(content));
    });
});