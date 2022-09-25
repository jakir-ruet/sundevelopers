import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons/faCircle";
import mobileapp from "../../../../assets/img/Development/mobileapp.png";

class MobileApplications extends Component{
    componentDidMount (){
        document.title = "Mobile Application | Welcome to Sun Developers | A home for your digital supports..."
    }
    render() {
        return(
            <div className="container">
                <section id="BusinessConsultancy">
                    <div className="section-header wow fadeInUp">
                        <h4 className="pt-4">Mobile Apps Development</h4>
                        <p style={{textAlign: 'justify'}}>
                            Sun Developers is the software development & a consultancy firm in the global village. We to the client’s complete software programming services and also offshore & outsourcing supports a wild wide. We have professional team for developing the web, desktop and mobile based software’s. Our portfolio are that React Native, Flutter, Java, Swift, MSSQL, MySQL, LINQ, ADO.NET and Ajax JavaScript. So, we mean that today is the time for taking a decision to using the software in your business for growth.
                        </p>
                    </div>
                    <div className="row">
                        <hr/>
                        <div className="col-md-6">
                            <table className="wow fadeInLeft">
                                <tbody>
                                <tr>
                                    <td style={{padding: '5px'}}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </td>
                                    <td> Easy to control your business.</td>
                                </tr>
                                <tr>
                                    <td style={{padding: '5px'}}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </td>
                                    <td> Invite to your client any time easily.</td>
                                </tr>
                                <tr>
                                    <td style={{padding: '5px'}}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </td>
                                    <td> May you control from remote place.</td>
                                </tr>
                                <tr>
                                    <td style={{padding: '5px'}}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </td>
                                    <td> Inspection the inventory list any time.</td>
                                </tr>
                                <tr>
                                    <td style={{padding: '5px'}}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </td>
                                    <td> Finally it is the demand of time/generation.</td>
                                </tr>
                                <tr>
                                    <td style={{padding: '5px'}}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </td>
                                    <td> Check the data all time by clicking of mobile.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-6">
                            <div className="wow fadeInRight">
                                <img className="img-responsive" width='100%' src={mobileapp} alt="mobileapp"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default MobileApplications;