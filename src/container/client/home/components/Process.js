import React, {Component} from "react";

class Process extends Component{
    render() {
        return(
            <div id="services" className="wow fadeInUp">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Process:</h2>
                        <p style={{ textAlign: "justify" }}>
                            Our expertise areas is Web Development, Software Development, Mobile Application
                            Development, Cloud Management, Server Configuration, eBusiness Consultancy, eCommerce, CMS &
                            so on. We believe in the best quality software & services to clients. Customer satisfaction
                            is our ultimate desire also we believe the dedication, commitment, transparent & accountable
                            to customer.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 mb-3">
                            <div className="box wow fadeInUp">
                                <h5 className="title" style={{ marginLeft: 0, fontSize: "18px" }}>
                                    Step-01: NDA
                                </h5>
                                <p className="description text-justify" style={{ marginLeft: 0 }}>
                                    The first step of our process is Non Disclosure Agreement (NDA), it is totally
                                    confidential with us & clients, suppliers, outsourcers etc.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-3">
                            <div className="box wow fadeInUp">
                                <h5 className="title" style={{ marginLeft: 0, fontSize: '18px' }}>
                                    Step-02: Meeting & Negotiation
                                </h5>
                                <p className="description text-justify" style={{ marginLeft: 0 }}>
                                    After signing the NDA we will start meeting or negotiation between we & customers.
                                    Where we will discuss the project vision & budget.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-3">
                            <div className="box wow fadeInUp" data-wow-delay="0.2s">
                                <h5 className="title" style={{ marginLeft: 0, fontSize: '18px' }}>
                                    Step-03: Planning
                                </h5>
                                <p className="description text-justify" style={{ marginLeft: 0 }}>
                                    If the meeting & negotiation has successful then we will start planning for the
                                    project start on instructions of customers requirements.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="box wow fadeInUp" data-wow-delay="0.2s">
                                <h5 className="title" style={{ marginLeft: 0, fontSize: "18px" }}>
                                    Step-04: Verify Architecture Design
                                </h5>
                                <p className="description text-justify" style={{ marginLeft: 0 }}>
                                    After completing the plan of project, we will start design & submit to clients for
                                    verifying its requirements. If result is okay then ready to development.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="box wow fadeInUp" data-wow-delay="0.2s">
                                <h5 className="title" style={{ marginLeft: 0, fontSize: "18px" }}>
                                    Step-05: Development & Testing
                                </h5>
                                <p className="description text-justify" style={{ marginLeft: 0 }}>
                                    The above steps has been successful then we are ready start for development the
                                    project. Where we have initiate developer & portfolio for the project.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="box wow fadeInUp" data-wow-delay="0.2s">
                                <h5 className="title" style={{ marginLeft: 0, fontSize: "18px" }}>
                                    Step-06: Launch or Start
                                </h5>
                                <p className="description text-justify" style={{ marginLeft: 0 }}>
                                    This is the final stage for the development of the project. If everything is okay
                                    then we will deliver to customer for starting the project.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Process;