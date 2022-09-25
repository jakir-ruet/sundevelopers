import React from 'react';

const TextArea = ({id, label, required, placeholder, value, onChanged, valid, error}) => {
    return (
        <div className="form-group mt-2">
            <label htmlFor={id}>{label} {required ? (<small className='text-danger'>*</small>) : null}</label>
            <textarea className="form-control" id={id} placeholder={placeholder} value={value} onChange={onChanged}/>
            {valid ? null :  <small id={`${id}_error`} className="form-text text-danger ">{error}</small>}
        </div>
    );
};

export default TextArea;