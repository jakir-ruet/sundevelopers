import React from 'react';
import DatePicker from "react-datepicker";

const DateTimePicker = ({key, label, required, name, value, placeholder, valid, error, onChanged}) => {
    return (
        <div className="form-group mt-2">
            <label htmlFor={key}>{label} {required ? (<small className='text-danger'>*</small>) : null}</label>
            <DatePicker
                name={name}
                dateFormat="dd/MM/yy"
                onChange={onChanged}
                selected={value}
                className='form-control form-control-sm'
                calendarIcon={null}
                placeholder={placeholder}
            />
            {valid ? null :  <small id={`${key}_error`} className="form-text text-danger text-muted">{error}</small>}
        </div>
    );
};

export default DateTimePicker;