import React, { Component } from 'react'
import TitleArea from '../Components/TitleArea'
import Navbar from '../Components/Navbar'

export default class Faq extends Component {
    render() {
        return (
            <div>
                  <Navbar></Navbar>
                <TitleArea pageName="FAQ"  ></TitleArea>
                <section className="choose-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span>Choose Paso</span>
                            <h2>We Achieved People’s Trust by Our Great Service</h2>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="choose-img">
                                    <img src="assets/images/choose-img.png" alt="choose" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="choose-content">
                                    <div className="faq-accordion">
                                        <ul className="accordion">
                                            <li className="accordion-item">
                                                <div className="icon">
                                                    <i className="flaticon-friends" />
                                                </div>
                                                <a className="accordion-title" href={() => false}>
                                                    <i className="bx bx-plus" /> Great Understanding</a>
                                                <p className="accordion-content show" style={{ display: 'none' }}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.
                      </p>
                                            </li>
                                            <li className="accordion-item">
                                                <div className="icon">
                                                    <i className="flaticon-chip" />
                                                </div>
                                                <a className="accordion-title"  href={() => false}>
                                                    <i className="bx bx-plus" />Update Techonlogy
                      </a>
                                                <p className="accordion-content" style={{ display: 'none' }}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.
                      </p>
                                            </li>
                                            <li className="accordion-item">
                                                <div className="icon">
                                                    <i className="flaticon-like" />
                                                </div>
                                                <a className="accordion-title"  href={() => false}>
                                                    <i className="bx bx-plus" />Experienced Team
                      </a>
                                                <p className="accordion-content" style={{ display: 'none' }}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.
                      </p>
                                            </li>
                                            <li className="accordion-item">
                                                <div className="icon">
                                                    <i className="flaticon-award" />
                                                </div>
                                                <a className="accordion-title active"  href={() => false} >
                                                    <i className="bx bx-plus" />Best Quality Service
                      </a>
                                                <p className="accordion-content" style={{ display: 'block' }}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.
                      </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
