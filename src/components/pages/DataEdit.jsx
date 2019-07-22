import React from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../shared/Sidebar';
import Form from '../shared/Form';
import Panel from '../shared/Panel';
import Table from '../shared/Table';

const headers = ['VALUE', 'DESCRIPTION'];
const fields = ['value', 'description'];
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
const links = [
    { text: 'user_id', active: true },
    { text: 'user_id' },
    { text: 'user_id' },
    { text: 'user_id' },
    { text: 'user_id' }
];

const saveField = () => {};

const DataEdit = () => {
    return (
        <div className="main">
            <h2 className="section-title">Manage Data</h2>

            <div className="sections">
                <div className="sidebar-container">
                    <Sidebar links={links} />
                </div>
                <div className="main-container">
                    <div className="margin-large">

                        <div className="field-container relative">
                            <div className="content">
                                <Form saveField={saveField} />

                                <Panel title="Possible values">
                                    <>
                                        <Table headers={headers} fields={fields} items={items} />
                                        <br />
                                        <Link to="#" className="btn btn-outline"><span className="icon-add"></span> Add possible value</Link>
                                    </>
                                </Panel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataEdit;
