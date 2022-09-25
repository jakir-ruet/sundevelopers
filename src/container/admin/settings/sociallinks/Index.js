import React, {Component} from 'react';
import Body from "../../../../components/ui/body/Body";
import Loader from "../../../../components/ui/Loader";
import Dropdown from "../../../../components/ui/dropdown/Dropdown";
import routes from "../../../../hoc/routers/Routes";
import {toast} from "react-toastify";
import submitNotify from "../../../../shared/Confirmation";

class Index extends Component {
    state = {
        loading: false
    }

    componentDidMount() {

    }

    onDeleteHandler = (id) => {
        this.setState({
            selectedId: id
        });
        submitNotify(this.onDeleteSubmit)
    }

    onDeleteSubmit = () => {
        toast.success('Social links has been deleted!');
    }

    render() {
        let content;
        if(this.state.loading)
            content = <Loader/>;
        else
            content = (
                <div className='card shadow'>
                    <div className='card-header'>
                        <button className='btn btn-sm btn-flat btn-primary' onClick={() => this.props.navigate('create')}><i className="bi bi-plus-circle"/> Create</button>
                    </div>
                    <div className='card-body'>
                        <div className='table-responsive'>
                            <table className='table-sm table-bordered table-striped table'>
                                <thead>
                                    <tr>
                                        <th className='text-center'>#</th>
                                        <th>Social Media Name</th>
                                        <th className='text-center'>Icon </th>
                                        <th>Link</th>
                                        <th className='text-center'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='text-center'>1</td>
                                        <td>Facebook</td>
                                        <td className='text-center'><i className="bi bi-facebook"/></td>
                                        <td >https://www.facebook.com/sunitlimited/</td>
                                        <td className='text-center'>
                                            <Dropdown items={[
                                                {title: 'Edit', itemClass: 'text-warning', icon: (<i className="bi bi-pencil-square"/>), onClicked: () => this.props.navigate('edit/1')}
                                                ,{title: 'Delete', itemClass: 'text-danger', icon: (<i className="bi bi-trash"/>), onClicked: () => this.onDeleteHandler(1)}
                                            ]}/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        return (
            <Body title={'Social Links'} paths={
                [
                    {name: 'Home', path: '/'},
                    {name: 'Dashboard', path: '/admin'}
                ]
            }>
                {content}
            </Body>
        );
    }
}

export default routes(Index);