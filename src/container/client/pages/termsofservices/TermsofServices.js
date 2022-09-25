import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faCheckCircle} from "@fortawesome/free-solid-svg-icons";

class TermsofServices extends Component{
    componentDidMount (){
        document.title = "Terms of Services | Welcome to Sun Developers | A home for your digital supports..."
    }
    render() {
        return(
            <>
                <div className="services">
                    <div id="services" className="wow fadeInUp">
                        <div className="container">
                            <div className="section-header">
                                <h2>Terms and Services</h2>
                                <p style={{ textAlign: "justify" }}>
                                    Please read these terms and conditions carefully before using
                                    our service. Terms of service are the legal agreements between a service provider and a
                                    person who wants to use that service. The person must agree to abide by the terms of service
                                    in order to use the offered service. Terms of service can also be merely a disclaimer,
                                    especially regarding the use of websites.
                                </p>
                                <p>Last updated: January 1, 2022</p>
                            </div>
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b>Interpretation: </b>
                                        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
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
                                                 Terms and Conditions (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of Terms and Conditions Generator.
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                 Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.
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
                                                 Website refers to SUN IT, accessible from <a href="https://www.sundevelopers.net">www.sundevelopers.net</a> & You mean the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                                             </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <p><b>Acknowledgement:</b></p>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <span style={{paddingLeft: '5px'}}>
                                                 <p>
                                                     These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                                                 </p>
                                                <p>
                                                    Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service. By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
                                                </p>
                                                <p>
                                                    Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
                                                </p>
                                             </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b>Links to Other Websites: </b>
                                        <p className="pb-1 m-0">
                                            Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
                                            The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
                                            We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
                                        </p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b>Termination: </b>
                                        We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. Upon termination, your right to use the Service will cease immediately.
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b>Limitation of Liability: </b>
                                        <p>
                                            Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
                                        </p>
                                        <p>
                                            To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
                                        </p>
                                        <p>
                                            Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
                                        </p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b>"AS IS" and "AS AVAILABLE" Disclaimery </b>
                                        <p>
                                            The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
                                            Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.
                                        </p>
                                        <p>
                                            Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
                                        </p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b>Governing Law: </b>
                                        <p>
                                            The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
                                        </p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b>Disputes Resolution: </b>
                                        <p>
                                            If You have any concern or dispute about the Service, you agree to first try to resolve the dispute informally by contacting the Company.
                                        </p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <p><b>Disclosure of your personal data:</b></p>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                 <b>Severability</b>
                                                <p className="p-0 m-0">
                                                    If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
                                                </p>
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                 <b>Waiver</b>
                                                <p className="p-0 m-0">
                                                    Except as provided herein, the failure to exercise a right or to require performance of an obligation under this Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall be the waiver of a breach constitute a waiver of any subsequent breach.
                                                </p>
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                 <b>Translation Interpretation</b>
                                                <p className="p-0 m-0">
                                                    These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.
                                                </p>
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                 <b>Changes to These Terms and Conditions</b>
                                                <p className="p-0 m-0">
                                                    We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
By continuing to access or use Our Service after those revisions become effective, you agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
                                                </p>
                                             </span>
                                        </div>
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
export default TermsofServices;