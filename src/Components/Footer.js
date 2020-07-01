import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <>
                {/* Footer Area */}
                <footer className="footer-area footer-area-2 pt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="content">
                                    <div className="logo">
                                      <Link to="/">  <img src="assets/images/logo2.png" alt="logo" /> </Link> 
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, mattetur adipiscing elit, sed do eiusmod.</p>
                                    <div className="subscribe">
                                        <h4>Join Newsletter</h4>
                                        <form className="newsletter-form" data-toggle="validator">
                                            <input type="email" id="emails" className="form-control" placeholder="Your Email" name="EMAIL" required autoComplete="off" />
                                            <button className="box-btn" type="submit">
                                                Subscribe
                      </button>
                                            <div id="validator-newsletter" className="form-result" />
                                        </form>
                                    </div>
                                    <ul className="social">
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank"  rel="noopener noreferrer"><i className="bx bxl-facebook" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank"  rel="noopener noreferrer"><i className="bx bxl-twitter" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank"  rel="noopener noreferrer" ><i className="bx bxl-instagram" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank"  rel="noopener noreferrer"><i className="bx bxl-pinterest" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="content ml-15">
                                    <h3>Our Service</h3>
                                    <ul className="footer-list">
                                        <li><Link to="/"> Visual Design</Link></li>
                                        <li><Link to="/">  Development</Link></li>
                                        <li><Link to="/"> QA &amp; Testing</Link></li>
                                        <li><Link to="/"> IT Management</Link></li>
                                        <li><Link to="/"> Cyber Security</Link></li>
                                        <li><Link to="/"> Wireless Connection</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="content">
                                    <h3>Quick Links</h3>
                                    <ul className="footer-list">
                                        <li><Link to="/">FAQ</Link></li>
                                        <li><Link to="/">Service</Link></li>
                                        <li><Link to="/"> Career</Link></li>
                                        <li><Link to="/">Privacy &amp; Policy</Link></li>
                                        <li><Link to="/">Terms &amp; Conditions</Link></li>
                                        <li><Link to="/"> Data Analysis</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="content contacts">
                                    <h3 className="ml-40">Contact</h3>
                                    <ul className="footer-list foot-social">
                                        <li><a href="tel:+1123456789"><i className="bx bx-mobile-alt" /> +1 123 456 789</a></li>
                                        <li><a href="tel:+1975456789"><i className="bx bx-phone" /> +1 975 456 789</a></li>
                                        <li><a href="mailto:hello@paso.com"><i className="bx bxs-envelope" /> hello@paso.com</a></li>
                                        <li><a href="mailto:support@paso.com"><i className="bx bxs-envelope" /> support@paso.com</a></li>
                                        <li><i className="bx bxs-map" /> 28/A street, New York, USA</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copy-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul className="menu">
                                        <li><Link to="/"> Home</Link>  </li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/solutions">Solutions</Link></li>
                                        <li><Link to="/case">Case Studies</Link></li>
                                        <li><Link to="/blog">Blog</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 text-right">
                                    <p>
                                        Copyright @2020 ###. All Rights Reserved by 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* End Footer Area */}
                {/* Start Go Top Area */}
                <div className="go-top">
                    <i className="bx bx-chevrons-up" />
                    <i className="bx bx-chevrons-up" />
                </div>
                {/* End Go Top Area */}
            </>
        )
    }
}
