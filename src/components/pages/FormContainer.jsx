import React, { useState } from 'react';

import Form from '../shared/Form';
import Table from '../shared/Table';
import Panel from '../shared/Panel';

const headers = ['VALUE', 'DESCRIPTION'];
const fields = ['value', 'description'];

const FormContainer = ({ field, saveField }) => {
    const newPossibleValues = field.possibleValues ? [...field.possibleValues] : [];
    const [possibleValues, setPossibleValues] = useState(newPossibleValues);

    if (!field) {
        return <div>Aún no ha seleccionado un campo.</div>;
    }

    const addPossibleValue = () => {
        console.log('addPossibleValue')
        const lastElement = possibleValues.length + 1;
        const newPossibleValues = [
            ...possibleValues,
            {
                id: lastElement,
                value: `valor ${lastElement}`,
                description: `descripcion ${lastElement}`
            }
        ];
        setPossibleValues(newPossibleValues);
        field.possibleValues = newPossibleValues;
    }

    return (
        <div className="field-container relative">
            <div className="content">
                <Form field={field} saveField={saveField} />

                <Panel title="Possible values">
                    <>
                        <Table headers={headers} fields={fields} items={possibleValues} />
                        <br />
                        <button className="btn btn-outline" onClick={() => addPossibleValue()}>
                            <span className="icon-add"></span> Add possible value
                        </button>
                    </>
                </Panel>
            </div>
        </div>
    );
};

export default FormContainer;
