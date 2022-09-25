import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons/faCircle";
import desktopapp from "../../../../assets/img/Development/desktopapp.png";

class DesktopApplications extends Component{
    componentDidMount (){
        document.title = "Desktop Application | Welcome to Sun Developers | A home for your digital supports..."
    }
    render() {
        return(
            <div className="container">
                <section id="BusinessConsultancy">
                    <div className="section-header wow fadeInUp">
                        <h4 className="pt-4">Desktop Application</h4>
                        <p style={{textAlign: 'justify'}}>


                            A desktop application is a software program that can be run on a standalone computer to perform a specific task by an end-user.

                            Some desktop applications such as word editor and media player allow you to perform different tasks while other such as gaming apps are developed purely for entertainment. When you purchase a computer or a laptop, there is a set of apps that are already installed on your desktop. You can also download and install different desktop applications directly from the Internet or purchased from software vendors. Our portfolio are that C#, Python, JavaScript, MSSQL & MySQL.
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
                                    <td> Free from web risk use</td>
                                </tr>
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
                                    <td> May you control from own office.</td>
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
                                    <td> Check the data all time by clicking of your computer.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-6">
                            <div className="wow fadeInRight">
                                <img className="img-responsive" width='100%' src={desktopapp} alt="mobileapp"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default DesktopApplications;