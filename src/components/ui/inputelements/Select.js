import React from 'react';
import ReactSelect from 'react-select'

const Select = ({id, label, required, name, options, isMulti, value, placeholder, disabled, valid, error, onChanged}) => {
    return (
        <div className="form-group mt-2">
            <label htmlFor={id}>{label} {required ? (<small className='text-danger'>*</small>) : null}</label>
            <ReactSelect
                name={name}
                options={options}
                isMulti={isMulti}
                value={value}
                onChange={onChanged}
                placeholder={placeholder}
                isDisabled={disabled}
            />
            {valid ? null :  <small id={`${id}_error`} className="form-text text-danger text-muted">{error}</small>}
        </div>
    );
};

export default Select;