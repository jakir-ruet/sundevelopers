import React from 'react';
import logo from "../../../../assets/logo.png";
import {Link} from "react-router-dom";

const Brand = () => {
    return (
        <Link to="/" className="logo me-auto">
            <div className="navbar">
                <div className="container-fluid p-0 m-0">
                    <div className="navbar-brand d-flex justify-content-between" style={{color: 'white', padding: '0px', backgroundColor: 'white'}}>
                        <img src={logo} alt="" width="40" height="40" className="d-inline-block align-text-top"/>
                        <div className="list-group" style={{borderRadius: '0'}}>
                            <h1 className="list-group-item p-0 m-0" style={{color: '#0F2C67', fontWeight: 'bold'}}>
                                <span className="p-0 m-0"><b style={{letterSpacing: '8px'}}>SUN  IT</b></span>
                            </h1>
                            <p className="list-group-item p-0 m-0" style={{letterSpacing: '12px', backgroundColor: '#3498db', color: 'white'}}> LIMITED</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default Brand;