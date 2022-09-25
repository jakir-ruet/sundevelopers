import React, {Component} from 'react';
import logo from '../../../../assets/img/About/logo.png';
class OurStrength extends Component{
    render() {
        return(
            <div id="team_strength" className="wow fadeInUp mt-3">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Professional Strength:</h2>
                        <p style={{textAlign:"justify"}}> We believe in professionalism in development. The
                            organizational structure of the team plays a critical role in its success. Software
                            development teams function best when they are organized into small sub teams. There
                            should be a clear delegation of responsibilities to sub teams. Team organization
                            structure is largely determined by the resources available.</p>
                    </div>
                </div>

                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-3 col-md-4">
                            <p className="p-0 m-0">Project Director</p>
                            <div className="team_strength-item wow fadeInUp">
                                <a href={logo}
                                   className="team_strength-popup">
                                    <img src={logo} alt="logo"/>
                                    <div className="team_strength-overlay">
                                        <div className="team_strength-info"><p className="wow fadeInUp">10+
                                            Years Experience</p></div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <p className="p-0 m-0">Sr. Software Developer</p>
                            <div className="team_strength-item wow fadeInUp">
                                <a href={logo}
                                   className="team_strength-popup">
                                    <img src={logo} alt="logo"/>
                                    <div className="team_strength-overlay">
                                        <div className="team_strength-info"><p className="wow fadeInUp">6+ Years
                                            Experience</p></div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <p className="p-0 m-0">Software Developer</p>
                            <div className="team_strength-item wow fadeInUp">
                                <a href={logo}
                                   className="team_strength-popup">
                                    <img src={logo} alt="logo"/>
                                    <div className="team_strength-overlay">
                                        <div className="team_strength-info"><p className="wow fadeInUp">4+ Years
                                            Experience</p></div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <p className="p-0 m-0">Jr. Software Developer</p>
                            <div className="team_strength-item wow fadeInUp">
                                <a href={logo}
                                   className="team_strength-popup">
                                    <img src={logo} alt="logo"/>
                                    <div className="team_strength-overlay">
                                        <div className="team_strength-info"><p className="wow fadeInUp">2+ Years
                                            Experience</p></div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <p className="p-0 m-0">Product Owner</p>
                            <div className="team_strength-item wow fadeInUp">
                                <a href={logo}
                                   className="team_strength-popup">
                                    <img src={logo} alt="logo"/>
                                    <div className="team_strength-overlay">
                                        <div className="team_strength-info"><p className="wow fadeInUp">4+ Years
                                            Experience</p></div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <p className="p-0 m-0">Scrum Master</p>
                            <div className="team_strength-item wow fadeInUp">
                                <a href={logo}
                                   className="team_strength-popup">
                                    <img src={logo} alt="logo"/>
                                    <div className="team_strength-overlay">
                                        <div className="team_strength-info"><p className="wow fadeInUp">4+ Years
                                            Experience</p></div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <p className="p-0 m-0">Software Tester</p>
                            <div className="team_strength-item wow fadeInUp">
                                <a href={logo}
                                   className="team_strength-popup">
                                    <img src={logo} alt="logo"/>
                                    <div className="team_strength-overlay">
                                        <div className="team_strength-info"><p className="wow fadeInUp">3+ Years
                                            Experience</p></div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <p className="p-0 m-0">Network Administrator</p>
                            <div className="team_strength-item wow fadeInUp">
                                <a href={logo}
                                   className="team_strength-popup">
                                    <img src={logo} alt="logo"/>
                                    <div className="team_strength-overlay">
                                        <div className="team_strength-info"><p className="wow fadeInUp">4+ Years
                                            Experience</p></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default OurStrength;
