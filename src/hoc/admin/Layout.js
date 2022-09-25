import React, {Fragment, useState} from 'react';
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import '../../assets/css/style.css';
import {Outlet} from "react-router-dom";
import Notify from "../../components/ui/notify/Notify";

const Layout = () => {

    const [isSidebarShow, setSidebarShow] = useState(false);

    return (
        <Fragment>
            <div className={isSidebarShow ? 'toggle-sidebar' : ''}>
                <Header sidebarToggled={() => setSidebarShow(!isSidebarShow)}/>

                <Sidebar/>

                <main id="main" className={`main`}>
                    <Outlet />
                </main>
                <a href={() => false} style={{cursor: 'pointer'}} className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"/></a>
                <Notify/>
            </div>
        </Fragment>
    );
};

export default Layout;