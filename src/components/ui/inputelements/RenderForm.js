import React from 'react';
import * as InputTypes from '../../../const/InputTypes'
import Input from "./Input";
import DatePickerInput from "./DateTimePicker";
import TextArea from "./Textarea";
import Select from "./Select";
import Checkbox from "./Checkbox";

const RenderForm = ({controls, isFormValid, btnText, onFormSubmitted, onChanged, icon}) => {

    let formElementsArray = [];
    for (let key in controls) {
        formElementsArray.push({
            id: key,
            config: controls[key]
        })
    }

    return (
        <form onSubmit={onFormSubmitted}>
            <div className='row'>
                {formElementsArray.map((element, index) => (
                    <div className={element.config.column ?? 'col-md-6 col-lg-6'} key={index}>
                        <RenderInput
                            onChanged={(value) => onChanged(value, element.id)}
                            id={element.id}
                            valid={element.config.touched && element.config.valid}
                            {...element.config}/>
                    </div>
                ))}
                <div className='col-12 text-end mt-2'>
                    <button className="btn btn-primary" type="submit" disabled={!isFormValid}>{icon} {btnText}</button>
                </div>
            </div>
        </form>
    );
};

export const RenderInput = (props) => {
    let element;
    // eslint-disable-next-line default-case
    switch (props.type){
        case InputTypes.TEXT:
            element = <Input required={props.validation.required} type='text' {...props}/>;
            break;
        case InputTypes.EMAIL:
            element = <Input required={props.validation.required} type='text' {...props}/>;
            break;
        case InputTypes.PASSWORD:
            element = <Input required={props.validation.required} type='password' {...props}/>;
            break;
        case InputTypes.NUMBER:
            element = <Input required={props.validation.required} type='number' {...props}/>;
            break;
        case InputTypes.FILE:
            element = <Input required={props.validation.required} type='file' {...props}/>;
            break;
        case InputTypes.DATE:
            element = <DatePickerInput required={props.validation.required} {...props}/>;
            break;
        case InputTypes.TEXTAREA:
            element = <TextArea required={props.validation.required} {...props}/>;
            break;
        case InputTypes.SELECT:
            element = <Select required={props.validation.required} {...props}/>;
            break;
        case InputTypes.CHECKBOX:
            element = <Checkbox {...props}/>;
            break;
    }

    return element;
}

export default RenderForm;