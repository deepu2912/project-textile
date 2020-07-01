import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class BlogArea extends Component {

    _onParent=(e)=>{
        e.preventDefault();
    }

    render() {
        return (
            <>
                {/* Blog Area */}
                <section className="home-blog-area pt-100 pb-100 bg-color">
                    <div className="container">
                        <div className="section-title">
                            <span>Blog Post</span>
                            <h2>Our Regular Blogs</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog">
                                    <div className="blog-img">
                                        <a href="blog-details.html">
                                            <img src="assets/images/blog/1.jpg" alt="blog" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <ul>
                                            <li>
                                                10 April 2020
                    </li>
                                            <li>
                                            <Link to='/' onClick={e => this._onParent(e)}>By Admin</Link>
                                                {/* <a href="#">By Admin</a> */}
                                            </li>
                                        </ul>
                                        <a href="blog-details.html">
                                            <h3>Joe’s Company Software Development Case</h3>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro</p>
                                        <a href="blog-details.html" className="line-bnt">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog">
                                    <div className="blog-img">
                                        <a href="blog-details.html">
                                            <img src="assets/images/blog/5.jpg" alt="blog" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <ul>
                                            <li>
                                                10 April 2020
                    </li>
                                            <li>
                                            <Link to='/' onClick={e => this._onParent(e)}>By Admin</Link>
                                            </li>
                                        </ul>
                                        <a href="blog-details.html">
                                            <h3>Temperature App UX Studies &amp; Development Case</h3>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro</p>
                                        <a href="blog-details.html" className="line-bnt">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                                <div className="single-blog">
                                    <div className="blog-img">
                                        <a href="blog-details.html">
                                            <img src="assets/images/blog/3.jpg" alt="blog" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <ul>
                                            <li>
                                                10 April 2020
                    </li>
                                            <li>
                                            <Link to='/' onClick={e => this._onParent(e)}>By Admin</Link>
                                            </li>
                                        </ul>
                                        <a href="blog-details.html">
                                            <h3>IT Software Company Development Case</h3>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro</p>
                                        <a href="blog-details.html" className="line-bnt">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-btn text-center">
                            {/* <p>We Have More Usefull Blogs For You. <a href="blog.html">View More</a></p> */}
                        </div>
                    </div>
                </section>
                {/* End Blog Area */}
            </>
        )
    }
}
