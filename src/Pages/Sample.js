import React, { Component } from 'react'
import TitleArea from '../Components/TitleArea'
import Navbar from '../Components/Navbar'

export default class Sample extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <TitleArea pageName="Samples"></TitleArea>
                <div className="pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <a href="assets/images/gallery/Air Force.PNG" target="_blank" alt="Air Force" >
                                    <img src="assets/images/gallery/Air Force.PNG" alt="Air Force" />
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a href="assets/images/gallery/buzz light year-100.PNG" target="_blank"  alt="buzz light year" >
                                    <img src="assets/images/gallery/buzz light year-100.PNG" alt="buzz light year" />
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a href="assets/images/gallery/car.PNG" target="_blank"  alt="buzz light year" >
                                    <img src="assets/images/gallery/car.PNG" alt="car" />
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a href="assets/images/gallery/Order 51.pdf" target="_blank" alt="Welsh_Dragon_" >
                                    <img src="assets/images/gallery/Welsh_Dragon_(Y_Ddraig_Goch).png" alt="Welsh_Dragon_" />
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a href="assets/images/gallery/Estimate 47-1.pdf" alt="john deer" target="_blank"   >
                                    <img src="assets/images/gallery/john deer bmp.bmp" alt="john deer" />
                                </a>
                            </div>
                            {/* <div className="col-lg-4 col-sm-6">
                                <a href="assets/images/gallery/Order 51.pdf" alt="john deer" >
                                <img src="assets/images/gallery/john deer bmp.bmp" alt="john deer" />
                                    <embed href="assets/images/gallery/Order 51.pdf" />
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
