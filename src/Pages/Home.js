import React, { Component } from 'react'

import Slider from '../Components/Slider'; 
import InfoArea from '../Components/InfoArea';
import ServiceArea from '../Components/ServiceArea';
import ProcessArea from '../Components/ProcessArea';
import TechnologyArea from '../Components/TechnologyArea';
import CaseStudies from '../Components/CaseStudies';
import ClientArea from '../Components/ClientArea';
import TeamArea from '../Components/TeamArea';
import BlogArea from '../Components/BlogArea';
import ContactUs from '../Components/ContactUs';


export default class Home extends Component {
 
    render() {
         
        return (
            <> 
                <Slider></Slider>
                <InfoArea></InfoArea>
                <ServiceArea></ServiceArea>
                <ProcessArea></ProcessArea>
                <TechnologyArea></TechnologyArea>
                <CaseStudies></CaseStudies>
                <ClientArea></ClientArea>
                <TeamArea></TeamArea>
                <BlogArea></BlogArea>
                <ContactUs></ContactUs> 
            </>
        )
    }
}
