import { useState } from 'react';
//import logo from "../../../../assets/logo.png";

const NavDropdown = () => {
    const [isShow, setShow] = useState(false);

    const style = {
        position: 'absolute',
        inset: '0px 0px auto auto',
        margin: '0px',
        transform: 'translate(0.34375px, 48px)',
        minWidth: '20rem'
    }
    const UlClass = ['dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'];
    const aClass = ['nav-link nav-icon'];
    if(isShow){
        UlClass.push('show');
        aClass.push('show');
    }
    return (
        <li className="nav-item dropdown">
            <a className={aClass.join(' ')} href={() => false} style={{cursor: 'pointer'}} data-bs-toggle="dropdown" onClick={() => setShow(!isShow)}>
                <i className="bi bi-chat-left-text"/>
                <span className="badge bg-success badge-number">1</span>
            </a>
            <ul className={UlClass.join(' ')}
                data-popper-placement="bottom-end"
                style={style}>
                <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning"/>
                    <div>
                        <h4>Lorem Ipsum</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>30 min. ago</p>
                    </div>
                </li>
                <li>
                    <hr className="dropdown-divider"/>
                </li>
                <li className="dropdown-footer"><a href={() => false} style={{cursor: 'pointer'}}>Show all notifications</a></li>

            </ul>

        </li>
    );
};

export default NavDropdown;