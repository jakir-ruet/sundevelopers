import React from 'react';

const Checkbox = ({id, value, label, onChanged}) => {
    return (
        <div className="form-check mt-3">
            <input className="form-check-input" type="checkbox" name={id} value={value} checked={value} id={id} onChange={onChanged}/>
            <label className="form-check-label" htmlFor={id}>{label}</label>
        </div>
    );
};

export default Checkbox;