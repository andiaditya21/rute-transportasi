import React, { Component } from 'react'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'

export default class Home extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Banner/>
            </>
        )
    }
}
