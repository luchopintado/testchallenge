import React from 'react';
import { Link } from 'react-router-dom';

import Table from '../shared/Table';
import FieldItem from '../shared/FieldItem';
import Panel from '../shared/Panel';
import Sidebar from '../shared/Sidebar';

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

const DataShow = () => {
    return (
        <div className="main">
            <h2 className="section-title">Manage Data</h2>

            <div className="sections">
                <div className="sidebar-container">
                    <Sidebar links={links} />

                    <div className="margin">
                        <button type="button" className="btn btn-outline"><span className="icon-add"></span> Add key</button>
                    </div>
                </div>
                <div className="main-container">
                    <div className="margin-large">
                        <div className="field-container">
                            <div className="header">
                                <h4 className="title">user_id</h4>
                                <div>
                                    <Link to="/data/edit" className="btn btn-primary"><span className="icon-edit"></span> Edit this</Link>
                                </div>
                            </div>
                            <div className="content">
                                <FieldItem title={"Description"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat voluptates quasi cum sed dolorem animi a officiis."} />
                                <FieldItem title={"Type"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat voluptates quasi cum sed dolorem animi a officiis."} />
                                <FieldItem title={"Sensitivity"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat voluptates quasi cum sed dolorem animi a officiis."} />

                                <br />

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

export default DataShow;
