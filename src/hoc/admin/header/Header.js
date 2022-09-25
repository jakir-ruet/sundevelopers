import React from 'react';
import logo from '../../../assets/logo.png'
import UserInfo from "./components/UserInfo";
import NavDropdown from "./components/NavDropdown";
import {Link} from "react-router-dom";

const Header = ({sidebarToggled}) => {
    return (
        <header className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
                <Link to='/' className="logo d-flex align-items-center" style={{textDecoration: 'none'}}>
                    <img src={logo} alt="logo"/> <span className="d-none d-lg-block">Admin Dashboard</span>
                </Link>
                <i className="bi bi-list toggle-sidebar-btn" onClick={sidebarToggled}/>
            </div>

            {/*<div className="search-bar">*/}
            {/*    <form className="search-form d-flex align-items-center" method="POST" action="#">*/}
            {/*        <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>*/}
            {/*        <button type="submit" title="Search"><i className="bi bi-search"/></button>*/}
            {/*    </form>*/}
            {/*</div>*/}

            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">
                    <NavDropdown/>
                    <UserInfo/>
                </ul>
            </nav>
        </header>
    );
};

export default Header;