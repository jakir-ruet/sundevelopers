import React, {Component} from 'react';
import scrumAgileProcess from '../../../../assets/img/About/scrumAgileProcess.png';
import agileProcess from '../../../../assets/img/About/agileProcess.png';

class OurMethodology extends Component{
    render() {
        return(
            <div className="container">
                <div className="section-header wow fadeInUp">
                    <h2>Our Methodology:</h2>
                    <p style={{textAlign:"justify"}}>
                        <b style={{fontSize: '14px'}}>Mock Product Development:</b> We will go through a simulated but complete scrum project, practicing all meetings prescribed by
                        scrum & using the related artifacts. Each step of the role play will use the results of
                        preceding steps.
                    </p>
                </div>

                <div className="section-header wow fadeInUp">
                    <p style={{textAlign:"justify"}}>
                        <b style={{fontSize: '14px'}}>Product Vision Meeting:</b> Suppose ABC company is the online base company, with about 100 outlets. Lately, the management
                        team at ABC company has observed that their customers are leading a fast-paced lifestyle and do
                        not travel long distances to do their products shopping. They also feel that because products
                        shopping is not a highly involved process, the best way to increase market share would be to
                        deliver products to the customer’s residence. In this regard, a representative has approached
                        your team on behalf of ABC company to create a website for customers to prepare their online
                        delivery order and make payments.
                    </p>
                </div>

                <div className="section-header wow fadeInUp">
                    <p style={{textAlign:"justify"}}>
                        <b style={{fontSize: '14px'}}>Create an Initial Product Backlog:</b> With our team, create an initial Product Backlog (containing high-level user stories, also
                        called “Epics”) for the given product vision. Some epics have already been defined for your
                        reference. Create additional product backlog items.
                    </p>

                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th className="text-center align-middle">SL</th>
                                <th className="text-left align-middle">User Story Description</th>
                                <th className="text-center align-middle">Initial Estimate</th>
                                <th className="text-center align-middle">Revised Estimate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="text-center align-middle">1</th>
                                <td className="text-left align-middle">
                                    As a Customer, I want to access the ABC company online products system so that I can see
                                    information and services specific to me
                                </td>
                                <td className="text-center align-middle">4</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <th className="text-center align-middle">2</th>
                                <td className="text-left align-middle">
                                    As an online products shopper, I want to be able to have multiple payment gateway
                                    options so that I can purchase services
                                </td>
                                <td className="text-center align-middle">5</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="section-header wow fadeInUp">
                    <p style={{textAlign:"justify"}}>
                        <b style={{fontSize: '14px'}}>Release Planning Meeting:</b> The product owner from each team will now conduct a release planning meeting to explain the
                        project requirements to the team, decide on the length of the Sprint, and discuss deadlines and
                        the product backlog.
                    </p>
                </div>

                <div className="section-header wow fadeInUp">
                    <p style={{textAlign:"justify"}}>
                        <b style={{fontSize: '14px'}}>Sprint Planning Meeting:</b> Using the existing prioritized product backlog (initially provided by the product owner and
                        refined by you during release planning), plan your next sprint with the faculty as your product
                        owner, commit to the scope of your next Sprint, and create a sprint backlog. List all the tasks
                        related to each user story and estimate them.
                    </p>
                    <br/>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th className="text-center align-middle">SL</th>
                            <th className="text-left align-middle">User Story Description</th>
                            <th className="text-center align-middle">Initial Estimate</th>
                            <th className="text-center align-middle">Revised Estimate</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th className="text-center align-middle">Story 1</th>
                            <td className="text-left align-middle">As a Customer, I want to access the ABC company
                                online products system so that I can see information and services specific to me
                            </td>
                            <td className="text-center align-middle">4</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <th className="text-center align-middle">1.1</th>
                            <td className="text-left align-middle">As a customer, I would like the website to have a
                                feature through which the visitor can create a unique login for themselves, so that ABC
                                company can maintain a database of their visitors.
                            </td>
                            <td className="text-center align-middle">5</td>
                            <td>&nbsp;</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="section-header wow fadeInUp">
                    <p className="text-justify">
                        <b style={{fontSize: '14px'}}>Requirements:</b> The requirements are discussed below in detail, including tasks description for example we show
                        the sample login form. The login feature following below.
                    </p>
                    <ol>
                        <li style={{padding: "0 0 5 10"}}>
                            As a customer, I would like the website to have a feature through which the visitor can
                            create a unique login for themselves, so that ABC company can maintain a database of their
                            visitors.
                        </li>
                        <li style={{padding: "0 0 5 10"}}>
                            As a Web developer, I would like to track user data through their unique login, so that the
                            client can make use of this data to customize offerings to the visitors.
                        </li>
                        <li style={{padding: "0 0 5 10"}}>
                            As a product owner, I want to ensure that the customer is able to log in as a guest, if he
                            or she does not want to log in.
                        </li>
                    </ol>
                </div>

                <div className="section-header wow fadeInUp">
                    <p style={{textAlign:"justify"}}>
                        <b style={{fontSize: '14px'}}>Implementation:</b> We do a mock product development using the technique of paper product development. The technique
                        will be explained to you by your faculty member. We will use it to develop the features
                        committed to in the sprint planning meeting. In this role-play, the duration of a simulated
                        workday will be time boxed to 5 minutes. A sprint will consist of 3 working days of 7 minutes (2
                        minutes Daily Standup, 5 minutes development).
                    </p>
                </div>
                <div className="section-header wow fadeInUp">
                    <h2>The Agile-Scrum Framework at a glance:</h2>
                    <img src={scrumAgileProcess} alt="Scrum Agile Process"/>
                </div>

                <div className="section-header wow fadeInUp">
                    <h2>Project Development Process:</h2>
                    <img src={agileProcess} alt="Agile Process"/>
                </div>
            </div>
        )
    }
}

export default OurMethodology;