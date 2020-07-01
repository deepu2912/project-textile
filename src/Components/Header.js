import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <>
                {/* Header Area */}
                <header className="header-area header-2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-7 text-left">
                                <div className="header-content-right">
                                    <ul className="header-contact">
                                        <li><a href="tel:+1123456789"><i className="bx bxs-phone-call" /> +1 123 456 789</a></li>
                                        <li><a href="mailto:hello@paso.com"><i className="bx bxs-envelope" /> hello@paso.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-5 text-right">
                                <div className="header-content-right">
                                    <ul className="header-social">

                                        <li> 
                                            <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank"><i className="bx bxl-facebook" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank"><i className="bx bxl-twitter" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank"> <i className="bx bxs-envelope" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank"> <i className="bx bxl-google-plus" /></a>
                                        </li>
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
