import React, { Component } from 'react'

export default class TitleArea extends Component {
    render() {
        return (
            <> 
                {/* Start Page Title Area */}
                <div className="page-title-area">
                    <div className="container">
                        <div className="page-title-content">
                            <h2>{this.props.pageName}</h2>
                            <ul>
                                <li>
                                    <a href="/"> Home </a>
                                </li>
                                <li className="active">{this.props.pageName}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="page-shape">
                        <div className="shape1">
                            <img src="assets/images/shape/1.png" alt="shape" />
                        </div>
                        <div className="shape3">
                            <img src="assets/images/shape/3.png" alt="shape" />
                        </div>
                        <div className="shape4">
                            <img src="assets/images/shape/4.png" alt="shape" />
                        </div>
                        <div className="shape5">
                            <img src="assets/images/shape/5.png" alt="shape" />
                        </div>
                        <div className="shape6">
                            <img src="assets/images/shape/6.png" alt="shape" />
                        </div>
                    </div>
                </div>
                {/* End Page Title Area */}
            </>
        )
    }
}
