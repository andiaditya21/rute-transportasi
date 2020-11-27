import React from 'react'
import Logo from '../../asset/brand logo/1x.png'
import Ig from '../../asset/brand logo/logo.png'
import Fb from '../../asset/brand logo/facebook.png'


export default function Footer() {
    return (
        <>
            <footer>
                <div className="container p-3">
                <div className="row justify-content-between">
                    <div className="col-3">
                    <img src={Logo} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-3 text-center">
                    <p>Tentang Kami</p>
                    <p>Review</p>
                    <p>Panduan</p>
                    </div>
                    <div className="col-3 text-center">
                    <p>Pusat Bantuan</p>
                    <p>Kontak Kami</p>
                    <p>Kebijakan Privasi</p>
                    </div>
                    <div className="col-3">
                    <p>Hubungi Kami:</p>
                    <a href="#" className="m-1">
                        <img src={Ig} alt="@havefun.project"/>
                    </a>
                    <a href="#" className="m-1">
                        <img src={Fb} alt="havefun.project"/>
                    </a>
                    </div>
                </div>
                </div>
            </footer>
        </>
    )
}
