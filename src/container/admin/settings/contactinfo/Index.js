import React, {Component} from 'react';
import * as InputTypes from '../../../../const/InputTypes'
import Body from "../../../../components/ui/body/Body";
import Loader from "../../../../components/ui/Loader";
import RenderForm from "../../../../components/ui/inputelements/RenderForm";
import onInputChanged from "../../../../shared/InputChanged";

class Index extends Component {
    state = {
        controls: {
            email: {
                type: InputTypes.EMAIL,
                label: 'Email',
                placeholder: 'Enter contact email',
                column: 'col-md-12',
                validation:{
                    required: true
                },
                valid: true,
                error:'',
                touched: false,
                value: ''
            },
            mobile: {
                type: InputTypes.TEXT,
                label: 'Mobile Number',
                placeholder: 'Enter contact mobile number',
                column: 'col-md-12',
                validation:{
                    required: true
                },
                valid: true,
                error:'',
                touched: false,
                value: ''
            },
            phone: {
                type: InputTypes.TEXT,
                label: 'Phone Number',
                placeholder: 'Enter contact phone number',
                column: 'col-md-12',
                validation:{
                    required: false
                },
                valid: true,
                error:'',
                touched: false,
                value: ''
            },
            businessHour: {
                type: InputTypes.TEXT,
                label: 'Business Hour',
                placeholder: 'Enter contact phone number',
                column: 'col-md-12',
                validation:{
                    required: true
                },
                valid: true,
                error:'',
                touched: false,
                value: ''
            },
            address: {
                type: InputTypes.TEXTAREA,
                label: 'Address',
                placeholder: 'Enter contact address',
                column: 'col-md-12',
                validation:{
                    required: true
                },
                valid: true,
                error:'',
                touched: false,
                value: ''
            }
        },
        formIsValid: true,
        loading: false
    }
    onInputChangedHandler = (event, identifier) => {
        const response = onInputChanged(event, identifier, this.state.controls);
        this.setState({controls: response.updatedControls, formIsValid: response.formIsValid})
    }

    onFormSubmitHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.controls){
            formData[formElementIdentifier] = this.state.controls[formElementIdentifier].value;
        }

        console.log(formData);
    }

    render() {
        let body;
        if(this.state.loading)
            body = <Loader/>;
        else
            body = (
                <RenderForm
                    controls={this.state.controls}
                    isFormValid={this.state.formIsValid}
                    btnText={'Save Changes'}
                    onChanged={this.onInputChangedHandler}
                    onFormSubmitted={this.onFormSubmitHandler}
                />
            );

        return (
            <Body title={'Contact Info'} paths={[
                {name: 'Home', path: '/'},
                {name: 'Dashboard', path: '/admin'}
            ]}>
                <div className='card shadow'>
                    <div className='card-body'>
                        {body}
                    </div>
                </div>
            </Body>
        );
    }
}

export default Index;