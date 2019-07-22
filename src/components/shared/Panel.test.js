import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from './Panel';

configure({ adapter: new Adapter() });

describe('Panel', () => {
    it('renderiza correctamente', () => {
        const titulo = 'titulo';
        const contenido = 'contenido';
        const componentePanel = (
            <Panel title={titulo}>
                <div>{contenido}</div>
            </Panel>
        );
        const wrapper = mount(componentePanel);
        const resultTitle = wrapper.find('.panel-title').text().includes(titulo);
        expect(resultTitle).toEqual(true);

        const resultContent = wrapper.find('.panel-body').text().includes(contenido);
        expect(resultContent).toEqual(true);
    })
});
