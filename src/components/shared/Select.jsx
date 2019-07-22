import React from 'react';

const Select = ({ values, onChange, selectedValue }) => {
    return (
        <div className="select">
            <select defaultValue={selectedValue} name="type" onChange={e => onChange(e.target.value)}>
                <option key="option-0" value="">Seleccionar</option>
                {
                    values.map((val, idx) => {
                        return <option key={`option-${idx+1}`} value={val}>{val}</option>
                    })
                }
            </select>
        </div>
    );
};

export default Select;
