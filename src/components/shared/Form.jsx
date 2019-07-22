import React, { useState } from 'react';

const Form = ({ saveField }) => {
    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ type, setType ] = useState('');
    const [ sensitivity, setSensitivity ] = useState(false);

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
                        onChange={e => setDescription(e.target.value)}
                    ></textarea>
                </div>
            </div>

            <div className="form-control">
                <label>Type</label>
                <div className="control">
                    <div className="select">
                        <select name="type" onChange={e => setType(e.target.value)}>
                            <option value="">Seleccione</option>
                            <option value="integer">integer</option>
                            <option value="string">string</option>
                            <option value="date">date</option>
                        </select>
                    </div>
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