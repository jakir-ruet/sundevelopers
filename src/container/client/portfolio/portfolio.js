import { Component } from "react";
import CustomCard from "./components/CustomCard";

class portfolio extends Component{
    componentDidMount (){
        document.title = "portfolio | Welcome to Sun Developers | A home for your digital supports..."
    }
    render() {
        return(
            <div className="services">
                <div id="services" className="wow fadeInUp">
                    <div className="container">
                        <div className="section-header">
                            <h2>Our portfolio</h2>
                            <p style={{ textAlign: "justify" }}>
                                Our expertise areas is Web Development, Software Development, Mobile Application
                                Development, Cloud Management, Server Configuration, eBusiness Consultancy, eCommerce, CMS &
                                so on. We believe in the best quality software & services to clients. Customer satisfaction
                                is our ultimate desire also we believe the dedication, commitment, transparent & accountable
                                to customer.
                            </p>
                        </div>

                        <div className="row">
                            <CustomCard title="System Programming" titleOne="Rust" titleTwo="C/C++" titleThree="Python"/>
                            <CustomCard title="Frontend" titleOne="HTML" titleTwo="CSS, SCSS, SASS" titleThree="ReactJS, AngularJS, VueJS"/>
                            <CustomCard title="Backend" titleOne="NodeJS - Express JS" titleTwo="Python - Django, Flask" titleThree="PHP - Laravel & ASP.NET Core"/>
                            <CustomCard title="Mobile Application" titleOne="Kotlin" titleTwo="Swift" titleThree="React Native" />
                            <CustomCard title="Database" titleOne="NoSQL - MongoDB" titleTwo="SQL - MySQL" titleThree="SQL - PostgreSQL"/>
                            <CustomCard title="Project Management Tools" titleOne="Jira" titleTwo="Trello" titleThree="MeisterTask"/>
                            <CustomCard title="Version Control Tools" titleOne="GitHub" titleTwo="GitLab" titleThree="Bitbucket"/>
                            <CustomCard title="Server" titleOne="RedHat" titleTwo="Ubuntu" titleThree="Windows"/>
                            <CustomCard title="Working OS" titleOne="Windows 11" titleTwo="MacOS" titleThree="Ubuntu"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default portfolio;