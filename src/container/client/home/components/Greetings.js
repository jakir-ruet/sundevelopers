import React, {Component} from "react";
import './Home.css'

class Greetings extends Component{
    render() {
        return(
            <div className="container-fluid">
                <div id="about" className="wow fadeInUp">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-md-12 content">
                                <h2>Welcome to Sun Developers</h2>
                                <h3>A home for your digital supports...</h3>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td><i className="bi bi-bookmark-check">&nbsp;</i></td>
                                        <td style={{ textAlign: "justify" }}>We are very pleased to you for visiting our website. As
                                            a software company the Sun Developers has good working environment, friendly &
                                            family atmosphere, customer satisfaction.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i className="bi bi-bookmark-check">&nbsp;</i></td>
                                        <td style={{ textAlign: "justify" }}>The Sun Developers has been operating its services to
                                            USA, UK & including the all over the world. As a service provider, we have been a
                                            priority to our client’s development.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i className="bi bi-bookmark-check">&nbsp;</i></td>
                                        <td style={{ textAlign: "justify" }}>We are very grateful to them who have supported to the
                                            Sun Developers. Finally, it is the belief of our embracing values to achieve success
                                            by providing the best services.
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Greetings;