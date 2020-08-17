import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class InfoArea extends Component {
    _onParent = (e) => {
        e.preventDefault()
    }
    render() {
        return (
            <>
                {/* Info Area */}
                <div className="info-area pt-100 pb-70 bg-color">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-info">
                                    <div className="info-img">
                                        <img src="assets/images/info/i1.jpg" alt="info" />
                                    </div>
                                    <div className="content">
                                        <h3><i className="flaticon-info" /> About Us</h3>
                                        <div className="arrow">
                                        <Link to='/about'> <i className="flaticon-next-1" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-info">
                                    <div className="info-img">
                                        <img src="assets/images/info/i2.jpg" alt="info" />
                                    </div>
                                    <div className="content">
                                        <h3><i className="flaticon-support" /> Our Vision</h3>
                                        <div className="arrow">
                                            
                                        <Link to='/'  > <i className="flaticon-next-1" /></Link>
                                            {/* <a href="#"> <i className="flaticon-next-1" /></a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
               
                        </div>
                    </div>
                </div>
                {/* End Info Area */}
            </>
        )
    }
}


// <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
// <div className="single-info si-30">
//     <div className="info-img">
//         <img src="assets/images/info/i3.jpg" alt="info" />
//     </div>
//     <div className="content">
//         <h3><i className="flaticon-goal" />Our Goal</h3>
//         <div className="arrow">
//         <Link to='/'  onClick={e => this._onParent(e)}> <i className="flaticon-next-1" /></Link>
//             {/* <a href="#"> <i className="flaticon-next-1" /></a> */}
//         </div>
//     </div>
// </div>
// </div>