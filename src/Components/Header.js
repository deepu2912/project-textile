import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <>
                {/* Header Area */}
                <header className="header-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-sm-0">
                                <div className="logo">
                                    <Link to="/"> 
                                    <img src="assets/images/logo.png" alt="logo"  className="logo-img" />
                                    </Link>
                                    {/* <a href="index-2.html"><img src="assets/images/logo.png" alt="logo" /></a> */}
                                </div>
                            </div>
                            <div className="col-lg-8 col-sm-8 text-right pr-0">
                                <div className="header-content-right">
                                    <ul className="header-contact">
                                        <li><a href="tel:+917973847720"><i className="bx bxs-phone-call" /> +91  7973847720</a></li>
                                        <li><a href="mailto:kristilopez01@gmail.com"><i className="bx bxs-envelope" /> kristilopez01@gmail.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-4 text-right pl-0">
                                <div className="header-content-right">
                                    <ul className="header-social"> 
                                        <li>
                                            <a href="https://www.facebook.com/kristi.lopez.73932" rel="noopener noreferrer" className="social-css" target="_blank"><i className="bx bxl-facebook" /></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/KristiL15790733?lang=en" rel="noopener noreferrer" className="social-css" target="_blank"><i className="bx bxl-twitter" /></a>
                                        </li>
                                        {/* <li>
                                            <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank"> <i className="bx bxs-envelope" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank"> <i className="bx bxl-google-plus" /></a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* End Header Area */}
            </>
        )
    }
}
