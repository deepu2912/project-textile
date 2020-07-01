import React, { Component } from 'react'
 

export default class ClientArea extends Component {
    
    render() {
        return (
            <>
                {/* Start Client Area */}
                <section className="client-area ptb-100 bg-color">
                    <div className="container">
                        <div className="section-title">
                            <span>Testimonials</span>
                            <h2>What Our Client’s Say</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta.</p>
                        </div>
                        <div className="client-wrap owl-carousel owl-theme">
                            <div className="single-client">
                                <img src="assets/images/client/1.jpg" alt="img" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing Quis suspendisse typesetting ipsum dolor sit amet,</p>
                                <h3>Steven Jony</h3>
                                <span>CEO of Company</span>
                            </div>
                            <div className="single-client">
                                <img src="assets/images/client/2.jpg" alt="img" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing Quis suspendisse typesetting ipsum dolor sit amet,</p>
                                <h3>Omit Jacson</h3>
                                <span>Company Founder</span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Client Area */}
            </>
        )
    }
}
