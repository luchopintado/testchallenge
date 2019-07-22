import React from 'react';

import Form from '../shared/Form';
import Table from '../shared/Table';
import Panel from '../shared/Panel';

const headers = ['VALUE', 'DESCRIPTION'];
const fields = ['value', 'description'];

const FormContainer = ({ field, saveField }) => {
    if (!field) {
        return <div>Aún no ha seleccionado un campo.</div>;
    }

    return (
        <div className="field-container relative">
            <div className="content">
                <Form field={field} saveField={saveField} />

                <Panel title="Possible values">
                    <>
                        <Table headers={headers} fields={fields} items={field.possibleValues || []} />
                        <br />
                        <button className="btn btn-outline"><span className="icon-add"></span> Add possible value</button>
                    </>
                </Panel>
            </div>
        </div>
    );
};

export default FormContainer;
