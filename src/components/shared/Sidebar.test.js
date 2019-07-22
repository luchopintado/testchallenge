import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sidebar from './Sidebar';

configure({ adapter: new Adapter() });

describe('Sidebar', () => {
    const links = [
        { text: 'link 1', active: true },
        { text: 'link 2' }
    ];
    const wrapper = shallow(<Sidebar links={links} />);

    it('renderiza correctamente', () => {
        expect(wrapper.find('a')).toHaveLength(links.length);

        const resp1 = wrapper.find('a').at(0).text().includes(links[0].text);
        const resp2 = wrapper.find('a').at(1).text().includes(links[1].text);

        expect(resp1).toEqual(true);
        expect(resp2).toEqual(true);

    });

    it('renderiza link activo', () => {
        expect(wrapper.find('a').at(0).hasClass('active')).toEqual(true);
        expect(wrapper.find('a').at(1).hasClass('active')).toEqual(false);
    });
});