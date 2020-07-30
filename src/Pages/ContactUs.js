import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import TitleArea from '../Components/TitleArea'
import ContactUsForm from '../Components/ContactUs'

export default class ContactUs extends Component {
    render() {
        return (
            <>
                <Navbar></Navbar>
                <TitleArea pageName="Contact Us"></TitleArea>
                <ContactUsForm></ContactUsForm>
            </>
        )
    }
}
