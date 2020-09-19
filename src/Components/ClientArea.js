import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';


export default class ClientArea extends Component {

    render() {

        const options = {
            loop: true,
            margin: 30,
            nav: false,
            mouseDrag: true,
            items: 1,
            dots: false,

            autoplay: true,
            smartSpeed: 800,
            autoplayHoverPause: true,
            center: false,
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                },
                576: {
                    items: 1,
                },
                768: {
                    items: 2,
                    margin: 20,
                },
                992: {
                    items: 2,
                },
                1200: {
                    items: 2,
                }
            }
        };


        return (
            <>
                {/* Start Client Area */}
                <section className="client-area ptb-100 bg-color">
                    <div className="container">
                        <div className="section-title">
                            {/* <span>Testimonials</span> */}
                            <h2>What Our Client’s Say</h2>

                        </div>

                        <OwlCarousel className="client-wrap owl-carousel owl-theme" {...options}>
                            <div className="single-client">

                                <p>Quality Digitizing, the name only suggests that this is a company that have
                                experts in digitizing. I came across so many companies but Quality Digitizing can rate to be
                                the best not because of their prices but due to their quality services as well. It is always a
                                great experience for me to work with them. I am very much satisfied with their services and
                                will highly recommend them only to others as well. A big thanks to Quality Digitizing for not
                                disappointing us.</p>
                                <h3>Allen Walker</h3>
                            </div>
                            <div className="single-client"> 
                                <p>I found this so very exciting page on Google and this is a company that tried to meet all our expectations. They meet all the deadlines, provide quality work to us, and are further, willing to redo pieces according to our requirements. If you want to value for money, then you should definitely try down their services.</p>
                                <h3>John DaCosta</h3> 
                            </div>
                            <div className="single-client"> 
                                <p>I was having a small scale business and was in need of a quality digitizing company that would exactly fit my pockets. Here I found the one, yes, Quality Digitizing is one of the best embroidery digitizing services having very low rates for vectorizing and digitizing both. If you are in need of affordable digitizing then you should definitely try out their services. Along with this, they meet all your needs, so you should go and contact them once.</p>
                                <h3>Suzan Embroidery</h3> 
                            </div>
                            <div className="single-client">
                                {/* <img src="assets/images/client/2.jpg" alt="img" /> */}
                                <p> Vector, yes it sounds bit technical but has work of art. Therefore, quality digitizing company is one of the best companies that will provide you quality digitizing as well as vectorizing. We are having a very great time to work with them, if you are interested in taking such services you should definitely try them. They will never disappoint, if you are not beliving just go and check out their prices and quality work. Ergo, a big thanks to the quality digitizing company.    </p>
                                <h3>William Danes</h3>
                                {/* <span>Company Founder</span> */}
                            </div>
                        </OwlCarousel>
                    </div>
                </section>
                {/* End Client Area */}
            </>
        )
    }
}
