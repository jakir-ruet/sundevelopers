import {confirmAlert} from "react-confirm-alert";

 const submitNotify = (submitHandler) => {
    confirmAlert({
        title: 'Confirm to submit',
        message: 'Are you sure to do this.',
        buttons: [
            {
                label: 'Yes',
                onClick: () => submitHandler()
            },
            {
                label: 'No',
                onClick: () => {}
            }
        ]
    });
}

export default submitNotify;