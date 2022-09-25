import { Component } from "react";
import './Contacts.css';

class Contacts extends Component{
    componentDidMount (){
        document.title = "Contact | Welcome to Sun Developers | A home for your digital supports..."
    }
    render() {
        return(
            <>
                <div className="container">
                    <div className="row body-title">
                        <h2>Contacts</h2>
                    </div>
                </div>

                <div id="contact" className="contact">
                    <div className="container">
                        <div className="row mt-2">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="info-box">
                                            <i className="bi bi-house">&nbsp;</i>
                                            <h3>Our Address</h3>
                                            <p>37 Miyapara, Rani Bazar Road, <br/> Ghoramara, Boalia, Rajshahi-6100</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-box mt-4">
                                            <i className="bi bi-envelope">&nbsp;</i>
                                            <h3>Email Us</h3>
                                            <a href="mailto:info@sundevelopers.net">info@sundevelopers.net</a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-box mt-4">
                                            <i className="bi bi-phone">&nbsp;</i>
                                            <h3>Call Us</h3>
                                            <p><a href="tel:8801749608171">+88 01516 79 29 08</a></p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">
                                <form className="contact">
                                    <div className="row">
                                        <div className="col form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                                        </div>
                                        <div className="col form-group">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows="3" placeholder="Message" required></textarea>
                                    </div>
                                    <div className="text-end mt-3">
                                        <button type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Contacts;