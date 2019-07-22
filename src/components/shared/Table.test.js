import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Table, { TableHead, TableBody } from './Table';
import { CHIP_STATES } from './Chip';

configure({ adapter: new Adapter() });

describe('Table', () => {
    const headers = ['VALUE', 'DESCRIPTION'];
    const specialHeaders = ['VALUE', 'DESCRIPTION', 'STATUS'];
    const fields = ['value', 'description'];
    const specialFields = ['value', 'description', 'status'];
    const items = [
        {
            id: 1,
            value: 'Valor 1',
            description: 'Descripcion 1'
        },
        {
            id: 2,
            value: 'Valor 2',
            description: 'Descripcion 2'
        }
    ];
    const specialItems = [
        {
            id: 1,
            value: 'valor',
            description: 'Descripcion 1',
            status: 1,
        },
        {
            id: 2,
            value: 'valor',
            description: 'Descripcion 2',
            status: 2,
        }
    ];

    describe('TableHeader', () => {

        it('renderiza encabezados', () => {
            const wrapper = shallow(<TableHead headers={headers} />);

            const ths = wrapper.find('th');
            expect(ths).toHaveLength(headers.length);

            const texto1 = wrapper.find('th').at(0).text();
            const texto2 = wrapper.find('th').at(1).text();

            expect(texto1).toEqual(headers[0]);
            expect(texto2).toEqual(headers[1]);
        });

    });

    describe('TableBody', () => {
        it('renderiza contenido', () => {
            const wrapper = shallow(<TableBody fields={fields} items={items} /> );
            const trs = wrapper.find('tr');
            expect(trs).toHaveLength(items.length)

            const resp1 = wrapper.find('tr').at(0).text().includes(items[0].value);
            const resp2 = wrapper.find('tr').at(0).text().includes(items[0].description);

            expect(resp1).toEqual(true);
            expect(resp2).toEqual(true);
        });
    });

    describe('Table', () => {
        const wrapper = mount(
            <Table
                headers={headers}
                items={items}
                fields={fields}
            />
        );

        it('renderiza encabezados', () => {
            const ths = wrapper.find('th');
            expect(ths).toHaveLength(headers.length);
        });

        it('renderiza cuerpo', () => {
            const trs = wrapper.find('tbody tr');
            expect(trs).toHaveLength(items.length)
        });

        it('renderiza contenido special (chips)', () => {
            const wrapper = mount(<Table headers={specialHeaders} fields={specialFields} items={specialItems} /> );
            const trs = wrapper.find('tbody tr');
            expect(trs).toHaveLength(specialItems.length);

            const resp1 = wrapper.find('tbody tr').at(0).find('span').text().includes(CHIP_STATES[1]);
            const resp2 = wrapper.find('tbody tr').at(1).find('span').text().includes(CHIP_STATES[2]);

            expect(resp1).toEqual(true);
            expect(resp2).toEqual(true);
        });
    })
});