import React, { Component } from 'react'
import TitleArea from '../Components/TitleArea'
import CompanyArea from '../Components/CompanyArea'
import TechnologyArea from '../Components/TechnologyArea'
import FeaturedArea from '../Components/FeaturedArea'
import ClientArea from '../Components/ClientArea'

export default class Aboutus extends Component {
    render() {
        return (
            <>
                <TitleArea pageName="About"></TitleArea> 
                <CompanyArea></CompanyArea>
                <TechnologyArea></TechnologyArea>
                <FeaturedArea></FeaturedArea>
                <ClientArea></ClientArea>
            </>
        )
    }
}
