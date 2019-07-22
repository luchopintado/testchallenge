import React from 'react';

const Select2 = ({ values, onChange, selectedValue }) => {
    return (
        <div className="select">
            <select name="type" onChange={e => onChange(e.target.value)}>
                {
                    selectedValue
                        ? <option key="option-0" value="">Seleccionar</option>
                        : <option key="option-0" value="" selected>Seleccionar</option>

                }
                {
                    values.map((val, idx) => {
                        if (val === selectedValue) {
                            return <option key={`option-${idx+1}`} value={val} selected>{val}</option>;
                        } else {
                            return <option key={`option-${idx+1}`} value={val} >{val}</option>;
                        }
                    })
                }
            </select>
        </div>
    );
};

const Select = ({ values, onChange, selectedValue }) => {
    return (
        <div className="select">
            <select defaultValue={selectedValue} name="type" onChange={e => onChange(e.target.value)}>
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
