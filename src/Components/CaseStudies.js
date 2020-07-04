import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class CaseStudies extends Component {
    _onParent = (e) => {
        e.preventDefault()
    }
 
    render() {
        return (
            <>
                {/*  Case Studies  */}
                <section className="home-case ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span>Case Studies</span>
                            <h2>Have a Look Our Work Showcase</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                        </div>
                        <div className="case">
                            <ul className="all-case">
                                <li className="active" data-filter="*"><span>All</span></li>
                                <li data-filter=".design"><span>Design</span></li>
                                <li data-filter=".dev"><span>Development</span></li>
                                <li data-filter=".cyber"><span>Cyber Security</span></li>
                            </ul>
                        </div>
                        <div className="row case-list" >
                            <div className="col-lg-4 col-sm-6 item cyber">
                                <div className="single-case">
                                    <div className="case-img">
                                        <a href="case-details.html">
                                            <img src="assets/images/case/c1.jpg" alt="case" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <a href="case-details.html">
                                            <h3>Joe’s Company Software Development Case</h3>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.</p>
                                        <a href="case-details.html" className="line-bnt">
                                            View Project Details
                  </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 item dev design">
                                <div className="single-case">
                                    <div className="case-img">
                                        <a href="case-details.html">
                                            <img src="assets/images/case/c2.jpg" alt="case" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <a href="case-details.html">
                                            <h3>Ride Share App UX Studies &amp; Development Case</h3>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.</p>
                                        <a href="case-details.html" className="line-bnt">
                                            View Project Details
                  </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 item dev">
                                <div className="single-case">
                                    <div className="case-img">
                                        <a href="case-details.html">
                                            <img src="assets/images/case/c3.jpg" alt="case" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <a href="case-details.html">
                                            <h3>Restaurant Management &amp; Web Developing</h3>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.</p>
                                        <a href="case-details.html" className="line-bnt">
                                            View Project Details
                  </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 item dev cyber">
                                <div className="single-case">
                                    <div className="case-img">
                                        <a href="case-details.html">
                                            <img src="assets/images/case/c4.jpg" alt="case" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <a href="case-details.html">
                                            <h3>IT Software Company Development Case</h3>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.</p>
                                        <a href="case-details.html" className="line-bnt">
                                            View Project Details
                  </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 item dev design">
                                <div className="single-case">
                                    <div className="case-img">
                                        <a href="case-details.html">
                                            <img src="assets/images/case/c5.jpg" alt="case" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <a href="case-details.html">
                                            <h3>Parking Management &amp; Web Developing</h3>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.</p>
                                        <a href="case-details.html" className="line-bnt">
                                            View Project Details
                  </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 item dev cyber design">
                                <div className="single-case">
                                    <div className="case-img">
                                        <a href="case-details.html">
                                            <img src="assets/images/case/c6.jpg" alt="case" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <a href="case-details.html">
                                            <h3>Temperature App UX Studies &amp; Development Case</h3>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.</p>
                                        <a href="case-details.html" className="line-bnt">
                                            View Project Details
                  </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="case-btn text-center">
                            <p>We Have More Amazing Cases. 
                            <Link to='/'  onClick={e => this._onParent(e)}>View More</Link> 
                                </p>
                        </div>
                    </div>
                </section>
                {/* End Case Studies */}
            </>
        )
    }
}
