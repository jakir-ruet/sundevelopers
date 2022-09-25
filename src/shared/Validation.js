
 const validation = (value, rules, label) => {
    let validStatus = {
        valid: true,
        error: ''
    };

    if(!rules){
        validStatus.valid = true;
        return validStatus;
    }

    if(rules.required && value !== null){
        if(!(value.length !== 0 && validStatus.valid)){
            validStatus.valid = false;
            validStatus.error = label + " field is required!";
            return validStatus
        }
    }
    if(rules.isNumber){
        if(!(!isNaN(value) && validStatus.valid)){
            validStatus.valid = false;
            validStatus.error = label + " is must number value!"
            return validStatus
        }
    }
    if(rules.length){
        if(!(value.length === rules.length && validStatus.valid)){
            validStatus.valid = false;
            validStatus.error = label + " field is must on "+rules.length+" character!";
            return validStatus
        }
    }
    if(rules.minLength){
        if(!(value.length >= rules.minLength && validStatus.valid)){
            validStatus.valid = false;
            validStatus.error = label + " must on " + rules.minLength+ " characters!"
            return validStatus
        }
    }

    if(rules.minLength){
        if(!(value.trim() !== '' && validStatus.valid)){
            validStatus.valid = false;
            validStatus.error = label + " is required!"
            return validStatus
        }
    }



    if(rules.validExtensions){
        const ext =  value.name.substring(
            value.name.lastIndexOf('.') + 1).toLowerCase();

        if(!rules.validExtensions.includes(ext)){
            validStatus.valid = false;
            validStatus.error = label + " is must " + rules.validExtensions.join(', ') +" extension !"
            return validStatus
        }
    }
    return validStatus;
}

export default validation;