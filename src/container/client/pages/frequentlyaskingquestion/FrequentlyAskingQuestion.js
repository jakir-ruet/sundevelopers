import React, {Component} from "react";

class FrequentlyAskingQuestion extends Component{
    componentDidMount (){
        document.title = "FAQ | Welcome to Sun Developers | A home for your digital supports..."
    }
    render() {
        return(
            <>
                <section id="faq" className="wow fadeInUp" style={{marginTop: '30px'}}>
                    <div className="container">
                        <div className="section-header">
                            <h2>Frequently Asked Questions</h2>
                            <p>
                                A FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic
                                or Frequently Answered Questions). The format is often used in articles, websites, email
                                lists, and online forums where common questions tend to recur, for example through posts
                                or queries by new users related to common knowledge gaps.
                            </p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <ul id="faq-list">
                                    <li>
                                        <a data-toggle="collapse" className="collapsed" href="#faq1">What type of
                                            Company?<i className="fa fa-minus-circle">&nbsp;</i></a>
                                        <div id="faq1" className="collapse" data-parent="#faq-list">
                                            <p>
                                                Sun Developers is the Bangladesh based web & software development
                                                company in global village.
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <a data-toggle="collapse" href="#faq2" className="collapsed">Why Sun IT is best
                                            in global village?<i className="fa fa-minus-circle">&nbsp;</i></a>
                                        <div id="faq2" className="collapse" data-parent="#faq-list">
                                            <p>
                                                <ul>
                                                    <li>Experience developer</li>
                                                    <li>Excellent Management</li>
                                                    <li>Experience Scrum Master</li>
                                                    <li>Best Working Environment</li>
                                                    <li>Committed for making best product</li>
                                                    <li>Use the best & updated portfolio</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <a data-toggle="collapse" href="#faq3" className="collapsed">What is the working
                                            coverage of the Sun Developers? <i className="fa fa-minus-circle">&nbsp;</i></a>
                                        <div id="faq3" className="collapse" data-parent="#faq-list">
                                            <p>
                                                The working coverage of Sun Developers is worldwide special USA, UK,
                                                Saudi Arabia, United Arab Emirates and many others.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default FrequentlyAskingQuestion;