import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import TitleArea from '../Components/TitleArea'
 import VectorServiceType from '../Components/VectorServiceType'

export default class Vector extends Component {
    render() {
        return (
            <>
                <Navbar></Navbar>
                <TitleArea pageName="Vector Service" pageTile={"Best high-quality designs !! We can easily convert the designs and vector artwork according to your choices."}></TitleArea>
                <VectorServiceType></VectorServiceType>
          </>
        )
    }
}
