import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export default class NotFound extends Component {
    render() {
        return (
            <>
                {
                    /* Start 404 Error */
                }
                <div className="error-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="error-page">
                                <img src="assets/images/404.gif" alt="error" />
                                <h3>Oops! Page Not Found</h3>
                                <p>The page you were looking for could not be found.</p>
                                <a href="/" className="box-btn"> Return To Home Page  </a>
                                {/* <Link to="/" className="box-btn">
                                Return To Home Page   </Link> */}
                            </div>
                        </div>
                    </div>
                </div>;
                {
                    /* End 404 Error */
                }

            </>
        )
    }
}
