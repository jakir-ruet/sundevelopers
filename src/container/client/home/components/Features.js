import React, {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChartLine, faHandshake, faObjectGroup, faUserFriends} from "@fortawesome/free-solid-svg-icons";

class Features extends Component{
    render() {
        return(
            <div id="services">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Salient Features:</h2>
                        <p style={{ textAlign: "justify" }}>
                            We always believe unique product for clients by deploying the
                            professional web & software developers. In Information and communication era our main
                            concern is that to develop the community with respect to the global village. Sun Developers
                            manages the complete web solution for clients such as remote control, electronic commerce,
                            mobile apps and software development. Our other concern is that to minimize the client’s
                            time and getting the optimum benefit in its business or educational institute. We try to
                            contribute in GDP by providing the IT related services for the nation.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 mb-3">
                            <div className="box wow fadeInLeft">
                                <div className="icon" style={{fontSize: "45px", color: "#0c2e8a"}}><FontAwesomeIcon icon={faChartLine}/></div>
                                <h4 className="title"><a href="/">Analysis the Nature of Services:</a></h4>
                                <p className="description">
                                    Primarily, we do preview the client's business. After singing the agreement with
                                    clients, we do fully inspect the nature of business.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-3">
                            <div className="box wow fadeInRight">
                                <div className="icon" style={{fontSize: "45px", color: "#0c2e8a"}}><FontAwesomeIcon icon={faObjectGroup}/></div>
                                <h4 className="title"><a href="/">Design of Software Architecture:</a></h4>
                                <p className="description">
                                    After inspecting the nature of business of clients. We do the designing the software
                                    architecture by using suitable methods & technology.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                                <div className="icon" style={{fontSize: "45px", color: "#0c2e8a"}}><FontAwesomeIcon icon={faUserFriends}/></div>
                                <h4 className="title"><a href="/">Deploying the Professional Engineers:</a></h4>
                                <p className="description">
                                    Then we do study & analysis the architecture of the software. After analysis, we are
                                    deploying the professional engineer to develop the software.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="box wow fadeInRight" data-wow-delay="0.2s">
                                <div className="icon" style={{fontSize: "45px", color: "#0c2e8a"}}><FontAwesomeIcon icon={faHandshake}/></div>
                                <h4 className="title"><a href="/">Debug the Software Properly & Handover: </a></h4>
                                <p className="description">
                                    Finally, after completing the software we do the debug caring & we use it if it
                                    works properly then handover to clients for a trial period.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Features;