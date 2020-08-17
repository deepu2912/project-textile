import React, { Component } from 'react'
import Slider from '../Components/Slider';
import InfoArea from '../Components/InfoArea';
import Navbar from '../Components/Navbar';
import Area from '../Components/TrustArea';
import ClientArea from '../Components/ClientArea';

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
                {/* Trust Area Started */}
                <Area></Area>
                {/* Trust Area Ended */}

                <ClientArea></ClientArea>
            </React.Fragment>
        )
    }
}
