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
                                        <Link to='/'  className="nav-link dropdown-toggle" onClick={e => this._onParent(e)}>Services</Link>
                                            {/* <a href="#" className="nav-link dropdown-toggle">Blog</a> */}
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                     <NavLink to="embroidery"  className="nav-link">Embroidery</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                <NavLink to="vector"  className="nav-link">Vector</NavLink>  </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink to='/sample' className="nav-link">Samples</NavLink>
                                       
                                        </li>
                                        <li className="nav-item">

                                        <NavLink to='/pricing' className="nav-link">Prices</NavLink>
  
                                        </li>
                                        <li className="nav-item">
                                        <NavLink to='/whywe' className="nav-link">Why We</NavLink>
                                       
                                        </li>
                               
                                     
                                        <li className="nav-item">
                                        <NavLink to="contact"  className="nav-link">Contact</NavLink>
                                        </li>
                                    </ul>
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
