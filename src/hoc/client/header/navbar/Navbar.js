import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import items from "./Items";

const SimpleMenu = ({path, title, hideMobileMenu}) => {
    return(
        <li onClick={hideMobileMenu}>
            <NavLink to={path} className="nav-link">{title}</NavLink>
        </li>
    )
}

const DropdownMenu = ({title, dropdownItems, hideMobileMenu}) => {
    const [isDropdownActive, setDropdownActive] = useState(false);
    return(
        <li className="dropdown" onClick={() => setDropdownActive(!isDropdownActive)}>
            <a href={() => false} style={{cursor: 'pointer'}} className="nav-link"><span>{title}</span> <i className="bi bi-chevron-down">&nbsp;</i></a>
            <ul className={isDropdownActive ? 'dropdown-active' : ''}>
                {dropdownItems.map((item, idx) => (
                    <SimpleMenu {...item} hideMobileMenu={hideMobileMenu} key={idx}/>
                ))}
            </ul>
        </li>
    )
}


const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleHideMobileMenu = () =>{
        setMobileMenuOpen(false);
    }

    return (
        <nav id="navbar" className={mobileMenuOpen ? 'navbar order-last order-lg-0 navbar-mobile' : 'navbar order-last order-lg-0'}>
            <ul>
                {items.map((item, index) => {
                    if(item.path){
                        return (<SimpleMenu {...item} hideMobileMenu={handleHideMobileMenu} key={index}/>)
                    }else{
                        return (<DropdownMenu {...item} hideMobileMenu={handleHideMobileMenu} key={index}/>)
                    }
                })}
            </ul>
            <i className={mobileMenuOpen ? 'bi bi-x mobile-nav-toggle' : 'bi bi-list mobile-nav-toggle'} style={{color: '#0F2C67'}} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>&nbsp;</i>
        </nav>
    );
};

export default Navbar;