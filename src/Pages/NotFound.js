import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import useWindowDimensions from '../Components/UseDimension';
// import { Link } from 'react-router-dom'

export default class NotFound extends Component {

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
      componentDidMount() {
  
        window.addEventListener('load', this.updateWindowDimensions);  
      }
     
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        console.log(this.state.width);
      }

    render() {


        let button = <Link to="/" className="box-btn"> Return To Home Page </Link>;

        
        if(this.state.width === 0){
            button = <a href="/" className="box-btn"> Return To Home Page  </a>;
        } 
        else if(this.state.width < 450){
            button = <a href="/" className="box-btn"> Return To Home Page  </a>;
        }


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
                                {button}
                                {/* <a href="/" className="box-btn"> Return To Home Page  </a> */}
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
