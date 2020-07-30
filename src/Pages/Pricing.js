import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import TitleArea from '../Components/TitleArea'

export default class Pricing extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <>
            <Navbar></Navbar>
            <TitleArea pageName="Pricing" pageTile={"Quality Digitizing Services are having very fewer prices for both digitizing and vector artworks. If you want to know about our prices and turnaround period, then have a look down below:"}></TitleArea>
            
            <section className="pricing-area pt-70 pb-70">
                    <div className="container">
                        <div className="col-12">
                            <div className="services-details-text">
                                <h2>DIGITIZING PRICES</h2>
                                <ol start={1}>
                                    <li>Digitizing Prices for 1000 to 10,000 stitches is $7 and for 10,000 to 20,000 stitches is $15. Therefore, for stitches above 20,000, we charge $1 per 1000 stitch. Hence, this is the lowest in the market.</li>
                                    <li>The prices of the left chest and cap are around $8 per 12,000 stitches. This is because these designs are a bit costly.</li>
                                    <li>The rates for the jacket and some other complicated designs will not exceed $50 even if the stitch count goes above 90,000 stitches.</li>
                                </ol>
                                <h2>TURNAROUND PERIOD</h2>
                                <p>For bigger designs that turnaround period is around 12 to 24 hours whereas for smaller designs it will be around 2 to 12 hours. But you should know some important things about our company.</p>
                                <ol start={1}>
                                    <li>Quality Digitizing services offer free format file conversion and we do edits as well as resizes also. Therefore, they are totally free of cost.</li>
                                    <li>If you will give bulk orders such as 4 to 5 then we will offer special discounts. For per 11,000 stiches we will charge $6.</li>
                                </ol>
                                <h2>VECTOR ARTWORK PRICES</h2>
                                <p>Pricing structure of Vector artwork is very much simple and low, if you want to know our prices then look below.</p>
                                <ol start={1}>
                                    <li>The simple vector artwork can easily be done at $7 whereas for bulk orders the charges will be $6 per vector.</li>
                                    <li>The medium vector artwork will be done at a rate of $10 whereas for bulk orders the rate will be $8 per vector design.</li>
                                    <li>The complex vector artwork will be done at a rate of $20 whereas for bulk orders we will charge $15 per vector design.</li>
                                </ol>
                                <h2>TURNAROUND PERIOD</h2>
                                <p>The normal turnaround period for vector designs is around 24 hours but if someone wants rush work then we can provide it in just 2 to 12 hours. Therefore, some important thing that should be known by our clients.</p>
                                <ol start={1}>
                                    <li>All the minor editing is done free of cost.</li>
                                    <li>Major editing is also done if the order is different from its original size. Therefore, we charge some amount of money for major editing.</li>
                                </ol>
                                <p>You should also know that we offer heavy discounts for bulk orders. If anyone is interested in knowing about the prices of bulk orders, then you can contact us easily through (<a href="mailto:krstilopez01@gmail.com"><i className="bx bxs-envelope" /> krstilopez01@gmail.com</a>). But now that question arises “How can the client make payment?” Don’t worry because paying to us is very simple and easy. You can easily use PayPal Method, Credit cards as well as Debit cards. Therefore, as soon as we get the payment we will send the required format files.
                So, think and place your order today only as we are the best digitizing and vector artwork services in Delhi, NCR region.
              </p>
                            </div>
                        </div>
                    </div>
                </section>
          
      </>
        )
    }
}
