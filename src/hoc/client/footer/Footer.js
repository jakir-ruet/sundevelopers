import { Link } from "react-router-dom";

function Footer () {
    return(
        <>
            <footer id="footer" style={{marginLeft: '0px'}}>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-links">
                                <h4 style={{color: 'white'}}>About</h4>
                                <hr />
                                <p style={{textAlign: 'justify'}}>
                                    We believe that the heritage of the homeland as well as the right and contemporary use of technology is key to the progress of a nation. Keeping this in mind, the individual progresses eventually aggregated in the progress of the whole nation. Sun IT always brings up-to-date, secure as well as verified technology in order to ultimate progress. We have professional software development engineers who are always concerned to deliver the optimum services for clients, it's our passion. At the end of the day, we are working relentlessly for customers to achieve their optimum benefit that is why the clients are always beside us for their services.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4 style={{color: 'white'}}>Useful Links</h4>
                                <hr />
                                <ul>
                                    <li><i className="bi bi-chevron-right">&nbsp;</i>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li><i className="bi bi-chevron-right">&nbsp;</i>
                                        <Link to="/about">About Us</Link>
                                    </li>
                                    <li><i className="bi bi-chevron-right">&nbsp;</i>
                                        <Link to="/disclaimer">Disclaimer</Link>
                                    </li>
                                    <li><i className="bi bi-chevron-right">&nbsp;</i>
                                        <Link to="/privacy-policy">Privacy Policy</Link>
                                    </li>
                                    <li><i className="bi bi-chevron-right">&nbsp;</i>
                                        <Link to="/term-of-services">Terms of Service</Link>
                                    </li>
                                    <li><i className="bi bi-chevron-right">&nbsp;</i>
                                        <Link to="/faq">Frequently Asking Question</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4 style={{color: 'white'}}>Our Services</h4>
                                <hr />
                                <ul>
                                    <li><i className="bi bi-chevron-right">&nbsp;</i>
                                        <Link to="/blockchain">Block Chain</Link>
                                    </li>
                                    <li><i className="bi bi-chevron-right">&nbsp;</i>
                                        <Link to="/cloudcomputing">Cloud Computing</Link>
                                    </li>
                                    <li><i className="bi bi-chevron-right">&nbsp;</i>
                                        <Link to="/internetthings">Internet of Things</Link>
                                    </li>
                                    <li><i className="bi bi-chevron-right">&nbsp;</i>
                                        <Link to="/webapplications">Web Applications</Link>
                                    </li>
                                    <li><i className="bi bi-chevron-right">&nbsp;</i>
                                        <Link to="/artificialintelligence">Artificial Intelligence</Link>
                                    </li>
                                    <li><i className="bi bi-chevron-right">&nbsp;</i>
                                        <Link to="/ebusinessconsultancy">eBusiness Consultancy</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <div className="footer-info">
                                    <h4 style={{color: 'white'}}>Contact</h4>
                                    <hr />
                                    <ul>
                                        <li><i className="bi bi-envelope">&nbsp;</i> <a
                                            href={() => false} style={{cursor: 'pointer'}}> info@sundevelopers.net</a></li>
                                        <li><i className="bi bi-phone">&nbsp;</i> <a href={() => false} style={{cursor: 'pointer'}}>
                                            +88 01516 79 29 08</a></li>
                                        <li><i className="bi bi-house">&nbsp;</i>
                                            <a href={() => false} style={{cursor: 'pointer'}}>
                                                <p style={{paddingLeft: '5px'}}> 37 Miyapara, Rani Bazar Road, <br/> Ghoramara, Boalia, Rajshahi-6100</p>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="social-links mt-3">
                                        <a href="https://www.linkedin.com/company/gosunitlimited" className="linkedin">
                                            <i className="bi bi-linkedin">&nbsp;</i>
                                        </a>
                                        <a href="https://www.facebook.com/SunItLimited/" className="facebook">
                                            <i className="bi bi-facebook">&nbsp;</i>
                                        </a>
                                        <a href={() => false} style={{cursor: 'pointer'}} className="twitter">
                                            <i className="bi bi-twitter">&nbsp;</i>
                                        </a>
                                        <a href={() => false} style={{cursor: 'pointer'}} className="instagram">
                                            <i className="bi bi-instagram">&nbsp;</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <b>Sun Developers</b>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Powered by <a href="https://sunlimited.com" target="_blank" rel="noreferrer">
                        <span style={{color: 'yellow'}}>Sun IT Limited</span>
                    </a>
                    </div>
                </div>
            </footer>

            {/*<div id="preloader">&nbsp;</div>*/}
            <a href={() => false} style={{cursor: 'pointer'}} className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short">&nbsp;</i>
            </a>
        </>
    )
}

export default Footer;