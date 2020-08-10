import React, { Component } from 'react' 
import Slider from '../Components/Slider';
import InfoArea from '../Components/InfoArea';
import Navbar from '../Components/Navbar';
 
export default class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {

        return (
            <React.Fragment>
                <Navbar></Navbar>
                <Slider></Slider>
                <InfoArea></InfoArea>
            </React.Fragment>
        )
    }
}
