import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import TitleArea from '../Components/TitleArea'

export default class WhyWe extends Component {
    render() {
        return (
            <>
                <Navbar></Navbar>
                <TitleArea pageName="Why choose our services?" pageTile={"Our services should be chosen because we properly know how to digitize the logo without damaging the original design during the process. Let’s discuss in details Why to choose us?"}></TitleArea>

                <section className="pricing-area pt-70 pb-70">
                    <div className="container">
                        <div className="col-12">
                            <div className="services-details-text">
                                <h2>QUALITY DIGITIZING SERVICES</h2>
                                <p>Quality Digitizing Services is located in <b>Delhi, NCR (National Capital Region), India</b>. Since 2008, we are offering good digitizing services and vector art services to thousands of people. The position that we have gained today is all because of the satisfied customers of our company. If you are viewing our site, then you will feel delighted to hear that the cost of digitizing is quite affordable i.e. <b>$1 per 1000</b> stitches. Whereas the tariff for vector artwork starts from <b>$7</b> that is very low in the market. One of the best things is that the edits are completely free. So, what are you thinking come in touch with us today only for getting the best digitizing service.</p>
                                <h3>Why choose our services?</h3>
                                <p>First of all, a hearty thanks to all the experts that help us in making the perfect designs with their innovative and creative skills. Our services should be chosen because we properly know how to digitize the logo without damaging the original design during the process. Let’s discuss in details Why to choose us?</p>
                                <ol start={1}>
                                    <li><b>Affordable services-</b> We are the company that gives full satisfaction to the clients by providing good results. Quality Digitizing gives free estimates whereas the designs provided are very much <b>affordable and cheap</b> in the market.</li>
                                    <li><b>Quality-</b> The designs and vector artwork provided by our company is done by experts using all the latest machines. Therefore, the results provided are very much <b>good in quality.</b> Just give us an opportunity to work with you, then make your decisions about our services.</li>
                                    <li><b>Best turnaround time-</b> The turnaround time for design conversion and vector artwork is <b>12 to 24 hours.</b> Try our services, to know deeper about the quality and turnaround time.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
