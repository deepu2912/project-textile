import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Admin extends Component {
    render() {
        return (
            <div>

                <section className="home-contact-area home-2-contact ptb-100">
                <div className="container" style={{ textAlign: 'right', padding: '9px' }}>
                    <button className="btn btn-info" sheet="Sheet">
                        <Link to="queries" style={{ color:'white' }} >Queries</Link>
                        </button>  
                    </div>
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="content">
                                    <form id="contactForm">
                                        <div className="row">
                                            <div className="col-lg-6 col-sm-6">
                                                <div className="form-group">
                                                    <input type="email" name="Email ID" id="EmailID" className="form-control" required data-error="Please enter your Email" placeholder="Email ID" />
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" name="Password" id="Password" className="form-control" required data-error="Please enter your Password" placeholder="Password" />
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

                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
