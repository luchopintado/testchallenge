import React, { useState } from 'react';
import Select from '../../components/shared/Select';

const Form = ({ field, saveField }) => {
    const [ name, setName ] = useState(field.name);
    const [ description, setDescription ] = useState(field.description);
    const [ type, setType ] = useState(field.type);
    const [ sensitivity, setSensitivity ] = useState(field.sensitivity);

    const handleSubmit = evt => {
        evt.preventDefault();
        saveField({
            name,
            description,
            type,
            sensitivity
        });

        setName('');
        setDescription('');
        setType('');
        setSensitivity('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="actions">
                <button type="submit" className="btn btn-primary">
                    <span className="icon-save"></span> Save
                </button>
            </div>

            <div className="form-control half">
                <label>Key Name</label>
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
            </div>

            <div className="form-control">
                <label>Description</label>
                <div className="control">
                    <textarea
                        className="textarea"
                        rows="4"
                        name="description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    ></textarea>
                </div>
            </div>

            <div className="form-control">
                <label>Type</label>
                <div className="control">
                    <Select values={['integer', 'string', 'date']} onChange={value => setType(value)} selectedValue={type} />
                </div>
            </div>

            <div className="form-control">
                <label>
                    <input
                        type="checkbox"
                        name="personalData"
                        checked={sensitivity}
                        onChange={() => setSensitivity(!sensitivity)}
                    />
                    Is this personal data?
                </label>
            </div>
        </form>
    );
};

export default Form;