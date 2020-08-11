import React, { Component } from 'react'

import * as $ from 'jquery';

export default class ContactUs extends Component {


    sendEmail = () => {
        var name = $("#name").val();
        var email = $("#email").val();
        var msg_subject = $("#msg_subject").val();
        var phone_number = $("#phone_number").val();
        var message = $("#message").val();

        fetch('https://node-deep.herokuapp.com/email/' + name + '/' + email + '/' + phone_number + '/' + msg_subject + '/' + message + '').then(response => response.text())
            .then(response => {
                console.log(response);
                $("#contactForm")[0].reset();
                var msgClasses = "h4 tada animated text-success";
                $("#msgSubmit").removeClass().addClass(msgClasses).text("Email Send Successfully");
            })
            .catch(err => {
                console.log(err);
                var msgClasses = "h4 text-danger"; 
                $("#msgSubmit").removeClass().addClass(msgClasses).text("Error! Please try again.");
            });

    }


    render() {
        return (
            <>
                {/* Home Contact Area */}
                <section className="home-contact-area home-2-contact ptb-100">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="content">
                                    <form id="contactForm">
                                        <div className="row">
                                            <div className="col-lg-12 col-sm-12">
                                                <div className="form-group">
                                                    <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Your Name" />
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-sm-12">
                                                <div className="form-group">
                                                    <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="Your Email" />
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-sm-12">
                                                <div className="form-group">
                                                    <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" placeholder="Your Phone" />
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-sm-12">
                                                <div className="form-group">
                                                    <input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" placeholder="Subject" />
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <textarea name="message" className="form-control" id="message" cols={30} rows={5} required data-error="Write your message" placeholder="Your Message" defaultValue={""} />
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                {/* id="contactFormButton"  */}
                                                <button onClick={this.sendEmail} type="button" className="default-btn page-btn box-btn">
                                                    Submit </button>
                                                <div id="msgSubmit" className="h3 text-center hidden" />
                                                <div className="clearfix" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="contact-img contact-img-2">
                                    <img src="assets/images/contact-img2.jpg" alt="contact" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Contact Area */}
            </>
        )
    }
}
