import React, {Component} from "react";

class ManagmentMeassage extends Component{
    render() {
        return(
            <div className="container">
                <div className="section-header wow fadeInUp">
                    <h2>Message of the Management:</h2>
                    <div>
                        <p style={{textAlign:"justify"}}>
                            Welcome to Sun Developers’s Website on behalf of the management. It is our determined policy
                            to adapt the nation in information technology. We have been developing the various type of
                            the software for building the digital nation. Our company’s development path over the years
                            reflects our core values is to offer innovative services to our clients and their customers
                            alike, within a fast-changing and stimulating work environment. Being a closely-held private
                            concern has enabled us to navigate these challenging waters with a high degree of
                            flexibility. Never taking no for an answer and always focusing on our clients’ needs have
                            served to make a trusted reference in our field. Our main goal is to continue to innovate to
                            provide high quality solutions for our clients. We will achieve this and our other
                            objectives by caring passionately for our clients, business partners, contactors and our
                            employees.
                        </p>
                        <div style={{textAlign: 'right'}}>
                            <p style={{color: 'green'}} className="p-0 m-0">On behalf of Management</p>
                            <p style={{color: '#3498db'}} className="p-0 m-0">Engr. Md. Jakaria</p>
                            <p style={{color: '#0F2C67'}} className="p-0 m-0">Founder Managing Director</p>
                            <p style={{color: 'green'}} className="p-0 m-0">Ex. Student</p>
                            <p style={{color: 'green'}} className="p-0 m-0">
                                BSc Engineer,
                                <a href="https://ruet.ac.bd/" target="_blank" rel="noreferrer noopener" style={{color: '#0F2C67', paddingLeft: '5px'}}>
                                     Rajshahi University of Engineering & Technology (RUET)
                                </a>
                            </p>
                            <p style={{color: 'green'}} className="p-0 m-0">
                                MBA,
                                <a href="https://www.ru.ac.bd/" target="_blank" rel="noreferrer noopener" style={{color: '#0F2C67', paddingLeft: '5px'}}>
                                     University of Rajshahi
                                </a>
                            </p>
                            <p style={{color: '#0F2C67'}}>
                                <a style={{fontSize: "15", margin:"0 0 0 5"}} href="mailto:mjakaria@sundevelopers.net">
                                    <span style={{color:"#0F2C67"}}>mjakaria@sundevelopers.net</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ManagmentMeassage;