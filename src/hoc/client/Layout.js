import React, {Component} from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Topbar from "./topbar/Topbar";
import {Outlet} from "react-router-dom";

class Layout extends Component{
    render() {
        return(
            <React.Fragment>
                <Topbar/>
                <Header/>
                <Outlet />
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Layout;