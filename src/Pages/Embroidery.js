import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import TitleArea from '../Components/TitleArea'
import EmbroideryServicesType from '../Components/EmbroideryServicesType'

export default class Embroidery extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
          <>
                <Navbar></Navbar>
                <TitleArea pageName="Embroidery Digitizing Sevices" pageTile={"Best Price, 100% Cost Effective & quality embroidery digitizing services with Profesional Digitizers"}></TitleArea>
                <EmbroideryServicesType></EmbroideryServicesType>
          </>
        )
    }
}
