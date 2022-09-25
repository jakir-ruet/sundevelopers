import React from "react";
import Navbar from "./navbar/Navbar";
import Brand from "./brand/Brand";

function Header () {

    return(
        <header id="header" className="sticky-top">
            <div className="container d-flex align-items-center">
                <Brand/>
                <Navbar/>
            </div>
        </header>
    )
}

export default Header;