import React, {Component} from "react";
import softwaredevelopment from "../../../../assets/img/Development/softwaredevelopment.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons/faCircle";

class Software extends Component{
    componentDidMount (){
        document.title = "Software | Welcome to Sun Developers | A home for your digital supports..."
    }
    render() {
        return(
            <div className="container">
                <section id="BusinessConsultancy">
                    <div className="section-header wow fadeInUp">
                        <h4 className="pt-4">Software Development</h4>
                        <p style={{textAlign: 'justify'}}>
                            Sun Developers is the software development & a consultancy firm in the global village. We to the client’s complete software programming services and also offshore & outsourcing supports a wild wide. We have professional team for developing the web, desktop and mobile based software’s. Our portfolio is that C/C++, C#, .NET (ASP.NET), .NET, Core, MVC, Java, PHP, Laravel, CakePHP, SQL, MySQL, LINQ, ADO.NET and Ajax JavaScript, Angular JS, Reacts and so on. So we mean that today is the time for taking a decision to using the software in your business for growth.
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
                                    <td> May you can save the time.</td>
                                </tr>
                                <tr>
                                    <td style={{padding: '5px'}}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </td>
                                    <td> To protect product from stolen.</td>
                                </tr>
                                <tr>
                                    <td style={{padding: '5px'}}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </td>
                                    <td> You must need less manpower.</td>
                                </tr>
                                <tr>
                                    <td style={{padding: '5px'}}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </td>
                                    <td> May you ahead business one step.</td>
                                </tr>
                                <tr>
                                    <td style={{padding: '5px'}}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </td>
                                    <td> Checking inventory in any moment.</td>
                                </tr>
                                <tr>
                                    <td style={{padding: '5px'}}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </td>
                                    <td> May you monitor business from remote.</td>
                                </tr>
                                <tr>
                                    <td style={{padding: '5px'}}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </td>
                                    <td> Operate your business by less expenses.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-6">
                            <div className="wow fadeInRight">
                                <img className="img-responsive" width='100%' src={softwaredevelopment} alt="Bunissconsultancy"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Software;