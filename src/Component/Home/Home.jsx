import React, { Component } from 'react'
import Banner from '../Banner/Banner'
import Layanan from '../Layanan/Layanan'
import Navbar from '../Navbar/Navbar'

export default class Home extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Banner/>
                <main class="my-5">
                    <div className="container">
                        <Layanan/>
                    </div>
                </main>
            </>
        )
    }
}
