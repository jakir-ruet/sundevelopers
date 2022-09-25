import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons/faCircle";
import webapps from "../../../../assets/img/Development/webapps.png";

class WebApplications extends Component{
    componentDidMount (){
        document.title = "Web Application | Welcome to Sun Developers | A home for your digital supports..."
    }
    render() {
        return(
            <div className="container">
                <section id="BusinessConsultancy">
                    <div className="section-header wow fadeInUp">
                        <h4 className="pt-4">Web & Web Applications</h4>
                        <p style={{textAlign: 'justify'}}>
                            Today everybody depend on online service system, having a website is a must for business now to attract them as a client. In the recent time, the importance of having a website is on high priority after getting our generation demand. But getting a worthy website/web application takes a huge effort, industry knowledge and implementation of best practices. At Sun IT Solution, we growing companies, assuring the maximum usability of the information technology. So we mean that today is the time for taking a decision to using the web & web apps in your business for growth.
                        </p>
                    </div>
                    <div className="row">
                        <hr/>
                        <div className="col-md-6">
                            <div className="wow fadeInRight">
                                <img className="img-responsive" width='100%' src={webapps} alt="mobileapp"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <table className="wow fadeInLeft">
                                <tbody>
                                <tr>
                                    <td style={{padding: '5px'}}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </td>
                                    <td> SEO friendly.</td>
                                </tr>
                                <tr>
                                    <td style={{padding: '5px'}}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </td>
                                    <td> Easy to sharing</td>
                                </tr>
                                <tr>
                                    <td style={{padding: '5px'}}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </td>
                                    <td> Easy to maintenance.</td>
                                </tr>
                                <tr>
                                    <td style={{padding: '5px'}}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </td>
                                    <td> It may dynamic/static.</td>
                                </tr>
                                <tr>
                                    <td style={{padding: '5px'}}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </td>
                                    <td> Work from remote place.</td>
                                </tr>
                                <tr>
                                    <td style={{padding: '5px'}}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </td>
                                    <td> Supported to the all browsers.</td>
                                </tr>
                                <tr>
                                    <td style={{padding: '5px'}}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </td>
                                    <td> Full responsive to any devices.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default WebApplications;