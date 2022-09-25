import React, {Component} from "react";
import ecommerce from '../../../../assets/img/Services/eCommerce.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from "@fortawesome/free-solid-svg-icons";

class Ecommerce extends Component{
    componentDidMount (){
        document.title = "eCommerce | Welcome to Sun Developers | A home for your digital supports..."
    }
    render() {
        return(
            <div className="container mt-3" id="ecommerce" style={{marginTop: "25"}}>
                <div className="section-header">
                    <h2>Ecommerce:</h2>
                    <p className="wow fadeInUp"  style={{textAlign:"justify"}}>
                        In this service we deliver the overall
                        solution for your online business such as monitoring & maintenance. When you chose this service
                        from Sun Developers then can offer much wider opportunities and immensely increase your services
                        list such as image, price, and description of the product.
                    </p>
                </div>

                <div className="row">
                    <div className="col-md-6 wow fadeInLeft">
                        <div className="img-ecommerce">
                            <img className="img-responsive" width='100%' src={ecommerce} alt="Ecommerce"/>
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                <span className="badge bg-info">
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <div className="ms-2 me-auto">
                                    You get Personal Account Manager (PAM) it will help you out with all the feature of your business Omni directionally.
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                <span className="badge bg-info">
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <div className="ms-2 me-auto">
                                    You get authorities power for checking, investigating of all function of your business when do you want to it.
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                <span className="badge bg-info">
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <div className="ms-2 me-auto">
                                    You may take all reports from business such as daily, weekly, monthly, etc. not only that you may get retail, merchant services.
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                <span className="badge bg-info">
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <div className="ms-2 me-auto">
                                    It has so many merits such as 24/7 services, low cost, sell internationally, easy to market, easy to manage and so on.
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                <span className="badge bg-info">
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <div className="ms-2 me-auto">
                                    Finally may manage your business in the way of smart, because its demand of a generation.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row pb-4">
                    <div className="wow fadeInUp" style={{padding: "11 25 0", fontSize: "20", fontWeight: "bold", color: "purple"}}>
                        You should have to know?
                    </div>
                    <hr/>
                    <p className="wow fadeInUp" style={{padding: "11 25 0", fontSize: "16", textAlign: "justify"}}>
                        We are enamored by its powerful services, features, modularity and flexibility to use it as a
                        platform to develop small information based content managed website to large portal with many
                        complex and dynamic features that is also scalable and robust. We use latest web technology
                        including ASP.NET & we do the following working smoothly.
                    </p>
                    <div className="col-md-6 wow fadeInLeft">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                <span className="badge bg-info" style={{marginTop: '3px'}}>
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <div className="ms-2 me-auto">
                                    Modifications of animations.
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                <span className="badge bg-info" style={{marginTop: '3px'}}>
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <div className="ms-2 me-auto">
                                    Insert and create content pages.
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                <span className="badge bg-info" style={{marginTop: '3px'}}>
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <div className="ms-2 me-auto">
                                    Modifying the source code of core.
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                <span className="badge bg-info" style={{marginTop: '3px'}}>
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <div className="ms-2 me-auto">
                                    Addition the plugins, widgets & modules.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-6 wow fadeInRight">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                <span className="badge bg-info" style={{marginTop: '3px'}}>
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <div className="ms-2 me-auto">
                                    Give you complete production level web site.
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                <span className="badge bg-info" style={{marginTop: '3px'}}>
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <div className="ms-2 me-auto">
                                    Customization of text’s, images, color & layout.
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                <span className="badge bg-info" style={{marginTop: '3px'}}>
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <div className="ms-2 me-auto">
                                    Customization themes, banners, logo, navigation and so on.
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                <span className="badge bg-info" style={{marginTop: '3px'}}>
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <div className="ms-2 me-auto">
                                    Addition of new features services to your choice of CMS system.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ecommerce;