import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
 

export default class ClientArea extends Component {
    
    render() {

        const options = {
            loop:true,
            margin:30,
            nav:false,
            mouseDrag: true,
            items:1,
            dots: false,
          
            autoplay: true,
            smartSpeed: 800,
            autoplayHoverPause: true,
            center: false,
            responsive:{
                0:{
                    items:1,
                    margin: 10,
                },
                576:{
                    items:1,
                },
                768:{
                    items:2,
                    margin: 20,
                },
                992:{
                    items:2,
                },
                1200:{
                    items:2,
                }
            }
        };


        return (
            <>
                {/* Start Client Area */}
                <section className="client-area ptb-100 bg-color">
                    <div className="container">
                        <div className="section-title">
                            <span>Testimonials</span>
                            <h2>What Our Client’s Say</h2>
                            
                        </div>

                        <OwlCarousel className="client-wrap owl-carousel owl-theme" {...options}>
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
                            <div className="single-client">
                                <img src="assets/images/client/2.jpg" alt="img" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing Quis suspendisse typesetting ipsum dolor sit amet,</p>
                                <h3>Omit Jacson</h3>
                                <span>Company Founder</span>
                            </div>
                            <div className="single-client">
                                <img src="assets/images/client/2.jpg" alt="img" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing Quis suspendisse typesetting ipsum dolor sit amet,</p>
                                <h3>Omit Jacson</h3>
                                <span>Company Founder</span>
                            </div>
                         </OwlCarousel>
                    </div>
                </section>
                {/* End Client Area */}
            </>
        )
    }
}
