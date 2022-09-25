import * as InputTypes from '../const/InputTypes'
import validation from "./Validation";


const onInputChanged = (event, identifier, controls) =>
{
    const updatedForm ={
        ...controls
    }

    let data;
    let value;
    if(updatedForm[identifier].elementType === InputTypes.SELECT){
        data = event;
        value = event.value;
    }
    else if(updatedForm[identifier].elementType === InputTypes.CHECKBOX){
        data = event.target.checked;
        value = event.target.checked;
    }
    else if(updatedForm[identifier].isMulti){
        data = event;
        value = event.target.checked;
    }
    else if(updatedForm[identifier].elementType === InputTypes.DATE){
        data = event;
        value = event.toString();
    }
    else if(updatedForm[identifier].elementType === InputTypes.FILE){
        data = event.target.files[0];
        value = event.target.files[0];
    }
    else{
        data = event.target.value;
        value = data;
    }
    updatedForm[identifier] = {
        ...updatedForm[identifier],
        value: data,
        ...validation(value, updatedForm[identifier].validation, updatedForm[identifier].label),
        touched: true
    };

    let formIsValid = true;
    for (let inputElement in updatedForm){
        formIsValid = updatedForm[inputElement].valid && formIsValid;
    }
    return {
        formIsValid: formIsValid,
        updatedControls: updatedForm
    }
}

export default onInputChanged;