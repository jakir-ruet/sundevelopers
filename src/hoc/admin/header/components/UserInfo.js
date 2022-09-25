import React, {useState} from 'react';
import logo from "../../../../assets/logo.png";

const UserInfo = () => {
    const [isShow, setShow] = useState();

    const style = {
        position: 'absolute',
        inset: '0px 0px auto auto',
        margin: '0px',
        transform: 'translate(-16px, 54px)'
    }
    return (
        <li className="nav-item dropdown pe-3">

            <a className={isShow ? 'nav-link nav-profile d-flex align-items-center pe-0 show' : 'nav-link nav-profile d-flex align-items-center pe-0'} href={() => false} style={{cursor: 'pointer'}} data-bs-toggle="dropdown" onClick={() => setShow(!isShow)}>
                <img src={logo} alt="Profile" className="rounded-circle"/>
                <span className="d-none d-md-block dropdown-toggle ps-2">Jakir</span>
            </a>

            <ul
                className={isShow ? 'dropdown-menu dropdown-menu-end dropdown-menu-arrow profile pt-0 show' : 'dropdown-menu dropdown-menu-end dropdown-menu-arrow profile pt-0'}
                data-popper-placement="bottom-end"
                style={style}>
                <li className="dropdown-header text-start" >
                    <h6 className="p-0 m-0">Jakir Ahmed</h6>
                    <p className="p-0 m-0 small">System Administrator</p>
                    <p className="p-0 m-0 small">Sun Developers</p>
                </li>
                <li>
                    <hr className="dropdown-divider"/>
                </li>

                <li>
                    <a className="dropdown-item d-flex align-items-center" href={() => false} style={{cursor: 'pointer'}}>
                        <i className="bi bi-person"/>
                        <span>My Profile</span>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider"/>
                </li>

                <li>
                    <a className="dropdown-item d-flex align-items-center" href={() => false} style={{cursor: 'pointer'}}>
                        <i className="bi bi-gear"/>
                        <span>Account Settings</span>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider"/>
                </li>

                <li>
                    <a className="dropdown-item d-flex align-items-center" href={() => false} style={{cursor: 'pointer'}}>
                        <i className="bi bi-question-circle"/>
                        <span>Need Help?</span>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider"/>
                </li>

                <li>
                    <a className="dropdown-item d-flex align-items-center" href={() => false} style={{cursor: 'pointer'}}>
                        <i className="bi bi-box-arrow-right"/>
                        <span>Sign Out</span>
                    </a>
                </li>
            </ul>
        </li>
    );
};

export default UserInfo;