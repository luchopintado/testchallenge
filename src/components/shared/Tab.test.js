import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tab from './Tab';

configure({ adapter: new Adapter() });

const tabHeaders = [
    { id: 0, text: 'All' },
    { id: 1, text: 'Pending' },
    { id: 2, text: 'Approved' },
    { id: 3, text: 'Denied' },
];

describe('Tab', () => {
    const onChangeTab = jest.fn();
    const preventDefault = jest.fn();
    const wrapper = shallow(
        <Tab headers={tabHeaders} onChangeTab={onChangeTab}>
            <div>contenido</div>
        </Tab>
    );

    it('render tab headers', () => {
        const resp1 = wrapper.find('a').at(0).text().includes('All');
        const resp2 = wrapper.find('a').at(1).text().includes('Pending');
        const resp3 = wrapper.find('a').at(1).text().includes('Hey !!!');

        expect(resp1).toEqual(true);
        expect(resp2).toEqual(true);
        expect(resp3).toEqual(false);
    });
    it('call onChangeTab event when clicks on a tab', () => {
        wrapper
            .find('a')
            .at(0)
            .simulate('click', { preventDefault });

        expect(preventDefault.mock.calls).toEqual([[]]);
        expect(onChangeTab.mock.calls).toEqual([
            [{ id: 0, text: 'All' }]
        ]);
    });
});