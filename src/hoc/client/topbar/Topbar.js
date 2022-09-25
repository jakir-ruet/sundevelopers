import React from 'react';

const Topbar = () => {
    return (
        <div id="topbar" className="d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-center justify-content-md-between" style={{fontSize: '13px'}}>
                <div className="align-items-center d-none d-md-flex">
                    <i className="bi bi-envelope">&nbsp;</i>
                    <a href="mailto:info@sundevelopers.net" className="text-white">info@sundevelopers.net</a>
                </div>
                <div className="d-flex align-items-center">
                    <i className="bi bi-phone">&nbsp;</i> Call us now
                    <a href="tel:8801749608171" style={{color: 'yellow', marginLeft: '5px'}}> +88 01516 79 29 08</a>
                </div>
            </div>
        </div>
    );
};

export default Topbar;