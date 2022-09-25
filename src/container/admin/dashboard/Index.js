import React, {Component, Fragment} from 'react';
import Body from "../../../components/ui/body/Body";

class Index extends Component {
    render() {
        return (
            <Fragment>
                <Body title={'Dashboard'} paths={[{name: 'Home', path: '/'}]}>
                    <div className='card shadow'>
                        <div className='card-body'>

                        </div>
                    </div>
                </Body>
            </Fragment>

        );
    }
}

export default Index;