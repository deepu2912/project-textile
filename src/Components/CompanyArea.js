import React, { Component } from 'react'

export default class CompanyArea extends Component {
    render() {
        return (
            <>
                {/* Company Area */}
                <section className="home-company-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="company-content">
                                    <div className="company-tittle">
                                        <span>Our Company</span>
                                        <h2>Innovative It Helping Service Allover the World</h2>
                                        <p>It is a long established fact that a reader will be distracted by the rea dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, as opposed to using Content here,content here normal distribution looking at its.</p>
                                        <p>It is a long established fact that a reader will be distracted by the rea dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, as opposed to using Content here,content here normal distribution looking at its.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="company-img">
                                    <img src="assets/images/company/company-img.jpg" alt="company" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Company Area */}
            </>
        )
    }
}
