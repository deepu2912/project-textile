import React, { Component } from 'react'

export default class TechnologyArea extends Component {
    render() {
        return (
            <>
                <section className="technology-area ptb-100 bg-color">
                    <div className="container">
                        <div className="row align-items-center choose-c">
                            <div className="col-lg-6">
                                <div className="choose-img">
                                    <img src="assets/images/choose-img1.jpg" alt="choose" />
                                    <div className="technology-video">
                                        <a href="https://www.youtube.com/watch?v=TdSA7gkVYU0" className="video-btn popup-youtube">
                                            <i className="bx bx-play" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="technology-content">
                                  
                                    <h2>Why select us as your designers?</h2>
                                    <p>There are so many reasons that will tell you why to select us as your designers. We are the designers of premium quality and provide perfect digitizing services to our clients and we ensure enhanced details, less thread breakage, sharper designs. Quality Digitizing Company works at a very faster rate because we don’t want our clients to suffer because of us. Therefore, this kind of attitude of our company helps us in making the clients happy, getting more work, and proper administration. Ergo, we would like to give a heartily thanks to all the in-house experts working in our company as they are the ones who helped us in gaining this position in the digitizing industry.</p>

                                    <p>We are the best service providers, so if you are thinking to place order then mail us at <a href="mailto:krstilopez01@gmail.com"><i className="bx bxs-envelope"></i> krstilopez01@gmail.com</a> </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
