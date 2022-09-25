import React from 'react';

const Input = ({id, label, required, type, placeholder, value, valid, error, onChanged}) => {
    return (
        <div className="form-group mt-2">
            <label htmlFor={id}>{label} {required ? (<small className='text-danger'>*</small>) : null}</label>
            <input type={type} className="form-control" placeholder={placeholder} value={type === 'file' ? null : value} id={id} onChange={onChanged}/>
            {valid ? null :  <small id={`${id}_error`} className="form-text text-danger">{error}</small>}
        </div>
    );
};


export default Input;