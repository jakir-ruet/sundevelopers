import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faCheckCircle} from "@fortawesome/free-solid-svg-icons";

class Disclaimer extends Component{
    componentDidMount (){
        document.title = "Disclaimer | Welcome to Sun Developers | A home for your digital supports..."
    }
    render() {
        return(
            <>
                <div className="services">
                    <div id="services" className="wow fadeInUp">
                        <div className="container">
                            <div className="section-header">
                                <h2>Disclaimer</h2>
                                <p style={{ textAlign: "justify" }}>
                                    The information contained on the Service is for general information purposes only. The
                                    Company assumes no responsibility for errors or omissions in the contents of the Service. In
                                    no event shall the Company be liable for any special, direct, indirect, consequential, or
                                    incidental damages or any damages whatsoever, whether in an action of contract, negligence
                                    or other tort, arising out of or in connection with the use of the Service or the contents
                                    of the Service. The Company reserves the right to make additions, deletions, or
                                    modifications to the contents on the Service at any time without prior notice. This
                                    Disclaimer has been created with the help of Disclaimer Generator. The Company does not
                                    warrant that the Service is free of viruses or other harmful components.
                                </p>
                                <p>Last updated: January 1, 2022</p>
                            </div>

                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b>Interpretation: </b>The words of which the initial letter is capitalized have meanings defined under the
                                        following conditions. The following definitions shall have the same meaning regardless
                                        of whether they appear in singular or in plural.
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <p><b>Definitions: </b>For the purposes of these Terms and Conditions:</p>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                             <span style={{paddingLeft: '5px'}}>
                                                 Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <span style={{paddingLeft: '5px'}}>
                                                <FontAwesomeIcon icon={faCheckCircle}/> Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Sun Developers,
                                                 <a href="mailto:info@sundevelopers.net"> info@sundevelopers.net</a>.
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <span style={{paddingLeft: '5px'}}>
                                                <FontAwesomeIcon icon={faCheckCircle}/> <b>Country refers to:</b> Bangladesh & Service refers to the Website.
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                 Service provider means any natural or legal person who processes the data on
                                        behalf of the company. It refers to third-party companies or individuals
                                        employed by the company to facilitate the service, to provide the service on
                                        behalf of the company, to perform services related to the service or to assist
                                        the company in analyzing how the service is used.
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                 Third-party social media service refers to any website or any social network
                                        website through which a user can log in or create an account to use the service.
                                        Personal data is any information that relates to an identified or identifiable
                                        individual.
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                 Cookies are small files that are placed on your computer, mobile device or any
                                        other device by a website, containing the details of your browsing history on
                                        that website among its many uses.
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                 Usage data refers to data collected automatically, either generated by the use
                                        of the service or from the service infrastructure itself (for example, the
                                        duration of a page visit).
                                             </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b>External Links Disclaimer: </b>
                                        The Service may contain links to external websites that are not provided or maintained
                                        by or in any way affiliated with the Company. Please note that the Company does not
                                        guarantee the accuracy, relevance, timeliness, or completeness of any information on
                                        these external websites.
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b>Errors and Omissions Disclaimer: </b>
                                        The information given by the Service is for general guidance on matters of interest
                                        only. Even if the Company takes every precaution to ensure that the content of the
                                        Service is both current and accurate, errors can occur. Plus, given the changing nature
                                        of laws, rules and regulations, there may be delays, omissions or inaccuracies in the
                                        information contained on the Service. The Company is not responsible for any errors or
                                        omissions, or for the results obtained from the use of this information.
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b>Fair Use Disclaimer: </b>
                                        The Company may use copyrighted material which has not always been specifically
                                        authorized by the copyright owner. The Company is making such material available for
                                        criticism, comment, news reporting, teaching, scholarship, or research. The Company
                                        believes this constitutes a "fair use" of any such copyrighted material as provided for
                                        in section 107 of the United States Copyright law. If You wish to use copyrighted
                                        material from the Service for your own purposes that go beyond fair use, you must obtain
                                        permission from the copyright owner.
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b>Views Expressed Disclaimer: </b>
                                        The Service may contain views and opinions which are those of the authors and do not
                                        necessarily reflect the official policy or position of any other author, agency,
                                        organization, employer or company, including the Company. Comments published by users
                                        are their sole responsibility and the users will take full responsibility, liability and
                                        blame for any libel or litigation that results from something written in or as a direct
                                        result of something written in a comment. The Company is not liable for any comment
                                        published by users and reserve the right to delete any comment for any reason
                                        whatsoever.
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b>No Responsibility Disclaimer: </b>
                                        The information on the Service is provided with the understanding that the Company is
                                        not herein engaged in rendering legal, accounting, tax, or other professional advice and
                                        services. As such, it should not be used as a substitute for consultation with
                                        professional accounting, tax, legal or other competent advisers. In no event shall the
                                        Company or its suppliers be liable for any special, incidental, indirect, or
                                        consequential damages whatsoever arising out of or in connection with your access or use
                                        or inability to access or use the Service.
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b>"Use at Your Own Risk" Disclaimer: </b>
                                        All information in the Service is provided "as is", with no guarantee of completeness,
                                        accuracy, timeliness or of the results obtained from the use of this information, and
                                        without warranty of any kind, express or implied, including, but not limited to
                                        warranties of performance, merchantability and fitness for a particular purpose. The
                                        Company will not be liable to You or anyone else for any decision made or action taken
                                        in reliance on the information given by the Service or for any consequential, special or
                                        similar damages, even if advised of the possibility of such damages.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Disclaimer;