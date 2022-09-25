import React, {Component} from 'react';
import * as InputTypes from "../../../../const/InputTypes";
import Loader from "../../../../components/ui/Loader";
import RenderForm from "../../../../components/ui/inputelements/RenderForm";
import Body from "../../../../components/ui/body/Body";
import routes from "../../../../hoc/routers/Routes";
import onInputChanged from "../../../../shared/InputChanged";

class CreateOrEdit extends Component {

    state = {
        controls: {
            name: {
                type: InputTypes.TEXT,
                label: 'Full Name',
                placeholder: 'Enter full name',
                column: 'col-md-12',
                validation:{
                    required: true,
                },
                valid: true,
                error:'',
                touched: false,
                value: ''
            },
            email: {
                type: InputTypes.EMAIL,
                label: 'Email',
                placeholder: 'Enter user email',
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
                placeholder: 'Enter phone number',
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
        formIsValid: false,
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
        let id = this.props.params.id;
        let content;
        if(this.state.loading)
            content = <Loader/>;
        else
            content = (
               <div className='card shadow'>
                   <div className='card-body'>
                       <RenderForm
                           controls={this.state.controls}
                           isFormValid={this.state.formIsValid}
                           btnText={id === undefined ? 'Create' : 'Edit'}
                           icon={id === undefined ? <i className="bi bi-plus-circle"/> : <i className="bi bi-pencil-square"/> }
                           onChanged={this.onInputChangedHandler}
                           onFormSubmitted={this.onFormSubmitHandler}
                       />
                   </div>
               </div>
            )

        return (
            <Body title={id === undefined ? 'Create' : 'Edit'} paths={
                [
                    {name: 'Home', path: '/'},
                    {name: 'Dashboard', path: '/admin'},
                    {name: 'Users', path: '/admin/users'}
                ]
            }>
                {content}
            </Body>
        );
    }
}

export default routes(CreateOrEdit);