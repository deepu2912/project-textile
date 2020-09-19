import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as $ from 'jquery';
export default class Admin extends Component {

    state = {
        query: [],
        login:localStorage.getItem("login")
    }
    updateList = () => {
        this.setState({
            login: localStorage.getItem("login")
        })
    }
    componentDidMount() {
        this.updateList()
    }

    login = (e) => {
        var username = $('#username').val();
        var Password = $('#Password').val();
        if (username.length === 0) {
            alert('Please enter username')
        }
        else if (Password.length === 0) {
            alert('Please enter password')
        }
        else {
            fetch('http://localhost:9000/checklogin/' + username + '/' + Password).then(res => res.text()).then(
                res => {
                    this.setState({
                        login: res
                    })
                    if (this.state.login === "Success") {
                        localStorage.setItem("login", 'Success')
                        return;
                    }
                    alert(this.state.login)
                }
            ).catch(err => {
                alert('There is some error in fetching Api. please try again after sometime or contact support')
            })
        }
    }


    render() {
        debugger;
        if (this.state.login !== "Success") {
            return (
                <div>
                    {/* Login Panel */}
                    <section className="home-contact-area home-2-contact ptb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="content">
                                        <form id="contactForm">
                                            <div className="row">
                                                <div className="col-lg-6 col-sm-6">
                                                    <div className="form-group">
                                                        <input type="text" name="username" id="username" className="form-control" required data-error="Please enter your username" placeholder="Username" />
                                                        <div className="help-block with-errors" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-6">
                                                    <div className="form-group">
                                                        <input type="Password" name="Password" id="Password" className="form-control" required data-error="Please enter your Password" placeholder="Password" />
                                                        <div className="help-block with-errors" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    {/* id="contactFormButton"  */}
                                                    <button onClick={this.login} type="button" className="default-btn page-btn box-btn">
                                                        Login </button>
                                                    <div className="h3 text-center hidden" />
                                                    <div className="clearfix" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    {/* Login Panel */}
                </div>
            )
        }

        return (
            <div>
                {/* Action Panel */}
                <section className="home-contact-area home-2-contact ptb-100">
                    <div className="container" style={{ textAlign: 'right', padding: '9px' }}>
                        <button className="btn btn-info" sheet="Sheet">
                            <Link to="queries" style={{ color: 'white' }} >Queries</Link>
                        </button>
                    </div>
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="content">
                                    <form id="contactForm">
                                        <div className="row">
                                            <div className="col-lg-6 col-sm-6">
                                                <div className="form-group">
                                                    <input type="email" name="Email ID" id="EmailID" className="form-control" required data-error="Please enter your Email" placeholder="Email ID" />
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" name="Password" id="Password" className="form-control" required data-error="Please enter your Password" placeholder="Password" />
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                {/* id="contactFormButton"  */}
                                                <button onClick={this.sendEmail} type="button" className="default-btn page-btn box-btn">
                                                    Submit </button>
                                                <div id="msgSubmit" className="h3 text-center hidden" />
                                                <div className="clearfix" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* Action Panel */}
            </div>
        )
    }
}
