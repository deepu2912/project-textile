import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class FeaturedArea extends Component {
    render() {
        return (
            <>
                   {/* Feature Area */}
      <section className="feature-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contnet">
                <div className="feature-tittle">
                  <span>Features</span>
                  <h2>We Have Also Some Features That Provided by Paso</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consectetur, beatae quod eaque reprehenderit non ab quibusdam doloribus voluptatibus! Voluptatum aspernatur quasi id dolore doloremque quo vero</p>
                </div>
                <ul>
                  <li>
                    <i className="flaticon-correct" />
                    Freelancing Traning Course
                  </li>
                  <li>
                    <i className="flaticon-correct" />
                    Technological Consultation
                  </li>
                  <li>
                    <i className="flaticon-correct" />
                    Monthly Paid Workspace
                  </li>
                  <li>
                    <i className="flaticon-correct" />
                    IT Learning Institute
                  </li>
                  <li>
                    <i className="flaticon-correct" />
                    Digital Marketing
                  </li>
                </ul>
                <Link to="/about" className="box-btn">Lets Talk!</Link>
                {/* <a href="#" className="box-btn">Lets Talk!</a> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-img">
                <img src="assets/images/feature-img.png" alt="feature" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Feature Area */}
            </>
        )
    }
}
