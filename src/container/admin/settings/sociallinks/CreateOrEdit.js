import React, {Component} from 'react';
import * as InputTypes from "../../../../const/InputTypes";
import Loader from "../../../../components/ui/Loader";
import RenderForm from "../../../../components/ui/inputelements/RenderForm";
import Body from "../../../../components/ui/body/Body";
import routes from "../../../../hoc/routers/Routes";

class CreateOrEdit extends Component {

    state = {
        controls: {
            name: {
                type: InputTypes.TEXT,
                label: 'Media Name',
                placeholder: 'Enter social media name',
                column: 'col-md-12',
                validation:{
                    required: true,
                },
                valid: true,
                error:'',
                touched: false,
                value: ''
            },
            icon: {
                type: InputTypes.TEXT,
                label: 'Icon',
                placeholder: 'Enter icon',
                column: 'col-md-12',
                validation:{
                    required: true
                },
                valid: true,
                error:'',
                touched: false,
                value: ''
            },
            link: {
                type: InputTypes.TEXTAREA,
                label: 'Social Link',
                placeholder: 'Enter social media link',
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
                    {name: 'Social Links', path: '/admin/social-links'}
                ]
            }>
                {content}
            </Body>
        );
    }
}

export default routes(CreateOrEdit);