import React from 'react'
import '../Comp.css'
import Logo from '../../asset/brand logo/0,75x.png'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt="Havefun.project" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav text-uppercase mx-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Layanan</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Review</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Bantuan</a>
                        </li>
                        </ul>
                        <a href="" className="nav-link text-white pl-0"><i class="fas fa-globe mr-2"></i>Bahasa Indonesia</a>
                    </div>
                </div>
            </nav>
        </>
    )
}
