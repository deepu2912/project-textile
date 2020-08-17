import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <>
                {/* Footer Area */}
                <footer className="footer-area footer-area-2 pt-100">  {/* footer-area-2 pt-100 */}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="content">
                                    <div className="logo">
                                      <Link to="/">  <img src="assets/images/logo.png" alt="logo" /> </Link> 
                                    </div>
                                    {/* <p>Lorem ipsum dolor sit amet, mattetur adipiscing elit, sed do eiusmod.</p> */}
                                    {/* <div className="subscribe">
                                        <h4>Join Newsletter</h4>
                                        <form className="newsletter-form" data-toggle="validator">
                                            <input type="email" id="emails" className="form-control" placeholder="Your Email" name="EMAIL" required autoComplete="off" />
                                            <button className="box-btn" type="submit">
                                                Subscribe
                      </button>
                                            <div id="validator-newsletter" className="form-result" />
                                        </form>
                                    </div>*/}
                               
                                    {/* <ul className="social"> 
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
                                */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="content ml-15">
                                    <h3>Our Service</h3>
                                    <ul className="footer-list">
                                        <li><Link to="/embroidery"> Embroidery</Link></li>
                                        <li><Link to="/vector">  Vector</Link></li>
                                     </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="content">
                                    <h3>Quick Links</h3>
                                    <ul className="footer-list">
                                        <li><Link to="/faq">FAQ</Link></li>
                                        <li><Link to="/privacy">Privacy &amp; Policy</Link></li>
                                        <li><Link to="/termsandconditions">Terms &amp; Conditions</Link></li>
                                                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="content contacts">
                                    <h3 className="ml-40">Contact</h3>
                                    <ul className="footer-list foot-social">
                                        <li><a href="tel:+917973847720"><i className="bx bx-phone" /> +91 7973847720</a></li>
                                        <li><a href="mailto:kristilopez01@gmail.com"><i className="bx bxs-envelope" /> kristilopez01@gmail.com</a></li>
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
                                  {/*   <ul className="menu">
                                        <li><Link to="/"> Home</Link>  </li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/solutions">Solutions</Link></li>
                                        <li><Link to="/case">Case Studies</Link></li>
                                        <li><Link to="/blog">Blog</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>*/}
                                </div> 
                                <div className="col-lg-6 text-right">
                                    <p>
                                     
                                Copyright @2020 Quality Digitizing Services
                            
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
