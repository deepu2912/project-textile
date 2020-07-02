import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    _onParent = (e) => {
        e.preventDefault()
    }
    render() {
        return (
            <>
                {/*Navbar Area */}
                <div className="navbar-area">
                    <div className="mobile-nav">
                        <Link to="/" className="logo">
                            <img src="assets/images/logo.png" alt="logo" />
                          </Link>
                    </div>
                    <div className="main-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                    <ul className="navbar-nav text-left">
                                        <li className="nav-item">
                                        <NavLink to="/"  className="nav-link">Home</NavLink>
                                        
                                        </li>
                                        <li className="nav-item">
                                     
                                            <NavLink to="about"  className="nav-link">About</NavLink>
                                          
                                        </li>
                                        <li className="nav-item">

                                        <NavLink to='/solutions' className="nav-link">Solutions</NavLink>
  
                                        </li>
                                        <li className="nav-item">
                                        <NavLink to='/CaseStudies' className="nav-link">Case Studies</NavLink>
                                        {/* <Link to='/'  className="nav-link dropdown-toggle" onClick={e => this._onParent(e)}>Case Studies</Link>
                                
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a href="case.html" className="nav-link">Case Studies</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="case-details.html" className="nav-link">Case Studies Details</a>
                                                </li>
                                            </ul> */}
                                        </li>
                                        <li className="nav-item">
                                        <Link to='/'  className="nav-link dropdown-toggle" onClick={e => this._onParent(e)}>Blog</Link>
                                            {/* <a href="#" className="nav-link dropdown-toggle">Blog</a> */}
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a href="blog.html" className="nav-link">Blog</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="blog-details.html" className="nav-link">Blog Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            {/* <a href="#" className="nav-link dropdown-toggle">Pages</a> */}
                                            <Link to='/'  className="nav-link dropdown-toggle" onClick={e => this._onParent(e)}>Pages</Link>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a href="team.html" className="nav-link">Team</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="pricing.html" className="nav-link">Pricing</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="gallery.html" className="nav-link">Gallery</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="testimonials.html" className="nav-link">Testimonials</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="singnup.html" className="nav-link">Sign Up</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="signin.html" className="nav-link">Sign In</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="404.html" className="nav-link">Error 404</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="faq.html" className="nav-link">FAQ</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="terms-condition.html" className="nav-link">Terms &amp; Conditions</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="privecy.html" className="nav-link">Privacy Policy</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="contact.html" className="nav-link">Contact </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="nav-right">
                                    <form>
                                        <div className="input-group">
                                            <input type="text" className="form-control search" placeholder="Search..." />
                                        </div>
                                        <button type="submit">
                                            <i className="bx bx-search" />
                                        </button>
                                    </form>
                                </div>
                                <div className="nav-btn">
                                    <a href="solutions.html" className="box-btn">Get Started</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* End Navbar Area */}
            </>
        )
    }
}
