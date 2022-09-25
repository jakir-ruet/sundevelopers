import React, {useState} from 'react';
import Menus from "./Menus";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                {Menus.map((item, index) => {
                    if(item.path)
                        return(<Menu {...item} key={index}/>);
                    else
                        return (<DropDownMenu {...item} key={index}/>)
                })}
            </ul>
        </aside>
    );
};


const Menu = ({title, path, icon}) => {
    return (
        <li className="nav-item">
            <NavLink className="nav-link " to={path}>
                <i className={icon}/>
                <span>{title}</span>
            </NavLink>
        </li>
    )
}

const DropDownMenu = ({title, subMenus, icon}) => {
    const [isShow, setShow] = useState(false);


    return (
        <li className="nav-item">
            <a className={`nav-link ${isShow ? '' : 'collapsed'}`} data-bs-target="#components-nav"
               href={() => false} style={{cursor: 'pointer'}} onClick={() => setShow(!isShow)} data-bs-toggle="collapse">
                <i className={icon}/>
                <span>{title}</span>
                <i className="bi bi-chevron-down ms-auto"/>
            </a>
            <ul id="components-nav" className={`nav-content collapse ${isShow ? 'show' : ''}`} data-bs-parent="#sidebar-nav">
                {subMenus.map(({title, path}, idx) => (
                    <li key={idx}>
                        <NavLink to={path} className={'nav-link'}>
                            <i className="bi bi-circle"/><span>{title}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </li>
    )
}


export default Sidebar;