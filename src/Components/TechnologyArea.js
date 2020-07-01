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
                                    <h2>Updated Technology</h2>
                                    <p>You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with.</p>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going There are many variations of passages of Lorem Ipsum available, but the.</p>
                                    <a href="contact.html" className="box-btn">
                                        Contact Us
                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        ) 
    }
}
