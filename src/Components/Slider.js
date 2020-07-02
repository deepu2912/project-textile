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
                                                    <h1>Awesome App For Your Modern Lifestyle</h1>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida incididunt ut.</p>
                                                    <div className="slider-btn text-center">
                                                        <Link to='/' className="box-btn" onClick={e => this._onParent(e)}>Let’s Talk!</Link>

                                                        <Link to='/' className="box-btn border-btn" onClick={e => this._onParent(e)}>Know More!</Link>
                                                        {/* <a href="#" className="box-btn">Let’s Talk!</a>
                            <a href="#" className="box-btn border-btn">Know More</a> */}
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
                                                    <h1>Digital Agency &amp; Marketing</h1>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida incididunt ut.</p>
                                                    <div className="slider-btn text-center">
                                                        <Link to='/' className="box-btn" onClick={e => this._onParent(e)}>Let’s Talk!</Link>

                                                        <Link to='/' className="box-btn border-btn" onClick={e => this._onParent(e)}>Know More!</Link>
                                                        {/* <a href="#" className="box-btn"></a> */}
                                                        {/* <a href="#" className="box-btn border-btn">Know More!</a> */}
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
                                                    <h1>Make Real-Life Connections With IT</h1>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida incididunt ut.</p>
                                                    <div className="slider-btn text-center">

                                                        <Link to='/' className="box-btn" onClick={e => this._onParent(e)}>Let’s Talk!</Link>

                                                        <Link to='/' className="box-btn border-btn" onClick={e => this._onParent(e)}>Know More!</Link>
                                                        {/* <a href="#" className="box-btn">Let’s Talk!</a>
                            <a href="#" className="box-btn border-btn">Know More</a> */}
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


