import React, { Component } from 'react'
import TitleArea from '../Components/TitleArea'
import InfoArea from '../Components/InfoArea'
import Navbar from '../Components/Navbar'

export default class Solutions extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <>
                <Navbar></Navbar>
                <TitleArea pageName="Solutions"></TitleArea>
                <InfoArea></InfoArea>
            </>
        )
    }
}
