import React, { Component } from 'react'
import TitleArea from '../Components/TitleArea'
import CompanyArea from '../Components/CompanyArea'
import TechnologyArea from '../Components/TechnologyArea'
import FeaturedArea from '../Components/FeaturedArea'
import ClientArea from '../Components/ClientArea'
import Navbar from '../Components/Navbar'

export default class Aboutus extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <>
            <Navbar></Navbar> 
                <TitleArea pageName="About" pageTile={[<b>Welcome!! </b> , " We are Quality Digitizing services and are having 10+ years’ experience in this field of SEO (Search Engine Optimization)."]} ></TitleArea> 
                <CompanyArea></CompanyArea>
                <TechnologyArea></TechnologyArea>
                <FeaturedArea></FeaturedArea>
                <ClientArea></ClientArea>
            </>
        )
    }
}

 