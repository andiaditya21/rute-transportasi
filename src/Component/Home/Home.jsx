import React, { Component } from 'react'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import Layanan from '../Layanan/Layanan'
import Navbar from '../Navbar/Navbar'
import NewsList from '../News/NewsList'
import Partner from '../Partner/Partner'
import ReviewerList from '../Reviewer/ReviewerList'
import WcuList from '../Wcu/WcuList'

export default class Home extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Banner/>
                <main className="my-5">
                    <div className="container">
                        <Layanan/>
                        <Partner/>
                    </div>
                </main>
                <WcuList/>
                <NewsList/>
                <ReviewerList/>
                <Footer/>
            </>
        )
    }
}
