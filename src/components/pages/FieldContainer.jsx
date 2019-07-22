import React from 'react';
import { Link } from 'react-router-dom';

import Table from '../shared/Table';
import Panel from '../shared/Panel';
import FieldItem from '../shared/FieldItem';

const headers = ['VALUE', 'DESCRIPTION'];
const fields = ['value', 'description'];

const FieldContainer = ({ field, onEditField }) => {
    if (!field) {
        return <div>Aún no ha seleccionado un campo.</div>;
    }

    return (
        <div className="field-container">
            <div className="header">
                <h4 className="title">{field.name}</h4>
                <div>
                    <button className="btn btn-primary" onClick={onEditField}>
                        <span className="icon-edit"></span> Edit this
                    </button>
                </div>
            </div>
            <div className="content">
                <FieldItem title={"Description"} content={field.description} />
                <FieldItem title={"Type"} content={field.type} />
                <FieldItem title={"Sensitivity"} content={field.sensitivity ? 'Yes' : 'No'} />

                <br />

                <Panel title="Possible values">
                    <Table headers={headers} fields={fields} items={field.possibleValues || []} />
                </Panel>
            </div>
        </div>
    );
};

export default FieldContainer;
