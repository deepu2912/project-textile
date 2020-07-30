import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';


export default class Slider extends Component {
    _onParent = (e) => {
        e.preventDefault()
    }


    render() {

        const options = {
            animateOut: 'slideOutDown',
            animateIn: 'slideInDown',
            items: 1,
            loop: true,
            autoplay: false,
            dots: false,
            nav: true, 
            autoplaySpeed: 800,
            mouseDrag: false,
            autoplayHoverPause: true,
            navText: [
                "<i class='flaticon-left-arrow'></i>",
                "<i class='flaticon-next-1'></i>"
            ],
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                1200: {
                    items: 1,
                }
            }
        };


        return (
            <>
                {/* Slider Area */}
                <section className="slider-area-2">

                    <OwlCarousel className="home-slider owl-carousel owl-theme" {...options}>
                    <div className="single-slider single-slider-bg-1">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-12 text-center">
                    <div className="slider-content one">
                      <h1>Awesome Quality Embroidery Digitizing Sevices</h1>
                      <p>Affordable services, Best turnaround time, Low pricing</p>
                      <div className="slider-btn text-center">
                        <a href="tel:+917837967982" className="box-btn">Let’s Talk!</a>
                        <Link to='/' className="box-btn border-btn" onClick={e => this._onParent(e)}>Know More!</Link>
                        {/* <a href="Embroidery.html" className="box-btn border-btn">Know More</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-slider single-slider-bg-2">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-12 text-center">
                    <div className="slider-content one">
                      <h1>QUALITY DIGITIZING SERVICES</h1>
                      <p>Quality Digitizing Services is located in Delhi, NCR (National Capital Region), India. Since 2008, we are offering good digitizing services and vector art services to thousands of people. The position that we have gained today is all because of the satisfied customers of our company. If you are viewing our site, then you will feel delighted to hear that the cost of digitizing is quite affordable i.e. $1 per 1000 stitches. Whereas the tariff for vector artwork starts from $7 that is very low in the market. One of the best things is that the edits are completely free. So, what are you thinking come in touch with us today only for getting the best digitizing service.</p>
                      <div className="slider-btn text-center">
                        <a href="tel:+917837967982" className="box-btn">Let’s Talk!</a>
                        <Link to='/' className="box-btn border-btn" onClick={e => this._onParent(e)}>Know More!</Link>
                        {/* <a href="WhyWe.html" className="box-btn border-btn">Know More!</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-slider single-slider-bg-3">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-12 text-center">
                    <div className="slider-content one">
                      <h1>VECTOR SERVICES</h1>
                      <p>Best high-quality designs !! We can easily convert the designs and vector artwork according to your choices.</p>
                      <div className="slider-btn text-center">
                        <a href="tel:+917837967982" className="box-btn">Let’s Talk!</a>
                        <Link to='/' className="box-btn border-btn" onClick={e => this._onParent(e)}>Know More!</Link>
                        {/* <a href="Vector.html" className="box-btn border-btn">Know More</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

                
                    </OwlCarousel>

                </section>
                {/* End Slider Area */}
            </>
        )
    }
}




// <div className="single-slider single-slider-bg-1">
// <div className="d-table">
//     <div className="d-table-cell">
//         <div className="container">
//             <div className="row align-items-center">
//                 <div className="col-lg-12 text-center">
//                     <div className="slider-content one">
//                         <h1>Awesome App For Your Modern Lifestyle</h1>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida incididunt ut.</p>
//                         <div className="slider-btn text-center">
//                             <Link to='/' className="box-btn" onClick={e => this._onParent(e)}>Let’s Talk!</Link>

//                             <Link to='/' className="box-btn border-btn" onClick={e => this._onParent(e)}>Know More!</Link>
//                             {/* <a href="#" className="box-btn">Let’s Talk!</a>
// <a href="#" className="box-btn border-btn">Know More</a> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
// <div className="single-slider single-slider-bg-2">
// <div className="d-table">
//     <div className="d-table-cell">
//         <div className="container">
//             <div className="row align-items-center">
//                 <div className="col-lg-12 text-center">
//                     <div className="slider-content one">
//                         <h1>Digital Agency &amp; Marketing</h1>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida incididunt ut.</p>
//                         <div className="slider-btn text-center">
//                             <Link to='/' className="box-btn" onClick={e => this._onParent(e)}>Let’s Talk!</Link>

//                             <Link to='/' className="box-btn border-btn" onClick={e => this._onParent(e)}>Know More!</Link>
//                             {/* <a href="#" className="box-btn"></a> */}
//                             {/* <a href="#" className="box-btn border-btn">Know More!</a> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
// <div className="single-slider single-slider-bg-3">
// <div className="d-table">
//     <div className="d-table-cell">
//         <div className="container">
//             <div className="row align-items-center">
//                 <div className="col-lg-12 text-center">
//                     <div className="slider-content one">
//                         <h1>Make Real-Life Connections With IT</h1>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida incididunt ut.</p>
//                         <div className="slider-btn text-center">

//                             <Link to='/' className="box-btn" onClick={e => this._onParent(e)}>Let’s Talk!</Link>

//                             <Link to='/' className="box-btn border-btn" onClick={e => this._onParent(e)}>Know More!</Link>
//                             {/* <a href="#" className="box-btn">Let’s Talk!</a>
// <a href="#" className="box-btn border-btn">Know More</a> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// </div>