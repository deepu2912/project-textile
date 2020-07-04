import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
 
export default class TeamArea extends Component {
    render() {

        const options = {
            loop: true,
        margin: 20,
        dots: true,
        autoplay: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
        };

        return (
            <>
                {/* Team Area */}
                <section className="home-team-area pt-100 pb-100">
                    <div className="container">
                        <div className="section-title">
                            <span>Team Members</span>
                            <h2>People Who are Behind the Achievements</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        </div>

                        <OwlCarousel className="home-team-slider owl-carousel owl-theme" {...options}>
                             <div className="single-team">
                                <div className="team-img">
                                    <img src="assets/images/team/t1.jpg" alt="team" />
                                    <ul className="social">
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxs-envelope" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h3>John Smith</h3>
                                    <p>Full Stack Developer</p>
                                </div>
                            </div>
                            <div className="single-team">
                                <div className="team-img">
                                    <img src="assets/images/team/t2.jpg" alt="team" />
                                    <ul className="social">
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxs-envelope" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h3>Evana Doe</h3>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                            <div className="single-team">
                                <div className="team-img">
                                    <img src="assets/images/team/t3.jpg" alt="team" />
                                    <ul className="social">
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxs-envelope" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h3>Bread Mc</h3>
                                    <p>IT Consulting</p>
                                </div>
                            </div>
                            <div className="single-team">
                                <div className="team-img">
                                    <img src="assets/images/team/t4.jpg" alt="team" />
                                    <ul className="social">
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxs-envelope" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h3>Maria Fread</h3>
                                    <p>UI/UX Designer</p>
                                </div>
                            </div>
                            <div className="single-team">
                                <div className="team-img">
                                    <img src="assets/images/team/t1.jpg" alt="team" />
                                    <ul className="social">
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxs-envelope" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h3>John Smith</h3>
                                    <p>Full Stack Developer</p>
                                </div>
                            </div>
                            <div className="single-team">
                                <div className="team-img">
                                    <img src="assets/images/team/t2.jpg" alt="team" />
                                    <ul className="social">
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxs-envelope" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h3>Evana Doe</h3>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                            <div className="single-team">
                                <div className="team-img">
                                    <img src="assets/images/team/t3.jpg" alt="team" />
                                    <ul className="social">
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxs-envelope" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h3>Bread Mc</h3>
                                    <p>IT Consulting</p>
                                </div>
                            </div>
                            <div className="single-team">
                                <div className="team-img">
                                    <img src="assets/images/team/t4.jpg" alt="team" />
                                    <ul className="social">
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bx bxs-envelope" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h3>Maria Fread</h3>
                                    <p>UI/UX Designer</p>
                                </div>
                            </div>
                       
                        </OwlCarousel>
                    </div>
                </section>
                {/* End Team Area */}

            </>
        )
    }
}
