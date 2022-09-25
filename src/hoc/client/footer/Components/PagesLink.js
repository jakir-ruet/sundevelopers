import React from 'react';
import {NavLink} from "react-router-dom";
import items from "../Components/Items";

const FooterList = ({path, title, hideMobileMenu}) => {
    return(
        <li>
            <NavLink to={path} className="nav-link">{title}</NavLink>
        </li>
    )
}
const PagesLink = () => {
    return (
        <ul>
            <li><i className="bi bi-chevron-right">&nbsp;</i>
                {items.map((item, index) => {
                    if (item.path){
                        return(
                            <FooterList {...item} key={index}/>
                        )
                    }
                })}
            </li>
        </ul>
    );
};

export default PagesLink;