import React, { Component } from 'react'
import '../Comp.css'

import Img_30 from '../../asset/3. Yogyakarta/malioboro.jpg'
import Img_31 from '../../asset/3. Yogyakarta/candi-prambanan.jpg'
import Img_32 from '../../asset/3. Yogyakarta/pasar-bringhardjo.jpg'

export default class Banner extends Component {
    render() {
        return (
            <>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="container">
                            <div className="carousel-item active">
                                <div className="row justify-content-between text-center">
                                    <div className="col-md py-2">
                                    <img src={Img_30} className="img-fluid" style={{height: 250}} alt="..." />
                                    </div>
                                    <div className="col-md py-2">
                                    <img src={Img_31} className="img-fluid" style={{height: 250}} alt="" />
                                    </div>
                                    <div className="col-md py-2">
                                    <img src={Img_32}className="img-fluid" style={{height: 250}} alt="" />
                                    </div>
                                </div>
                                <div className="caption-carousel mt-3 mb-5 text-center">
                                    <h4>Yogyakrta</h4>
                                    <p className="">Yogyakarta menjunjung tinggi adat-istiadat dan terkenal ramah tamah</p>
                                </div>
                            </div>
                            {/* <div className="carousel-item">
                                <div className="row justify-content-between text-center">
                                    <div className="col-md py-2">
                                        <img src="asset/1. Bandung/gedung sate 2.png" className="img-fluid" alt="..." />
                                    </div>
                                    <div className="col-md py-2">
                                        <img src="asset/1. Bandung/braga street 2.png" className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-md py-2">
                                        <img src="asset/1. Bandung/alun-alun bandung 2.png" className="img-fluid" alt="" />
                                    </div>
                                </div>
                                <div className="caption-carousel mt-3 mb-5 text-center">
                                    <h4>Semarang</h4>
                                    <p className="">Bandung menjadi surga para pelancong makanan ringan yang melegenda</p>
                                </div>
                            </div> */}
                            {/* <div className="carousel-item">
                                <div className="row justify-content-between text-center">
                                    <div className="col-md py-2">
                                        <img src={Img_30} className="img-fluid" alt="..." />
                                    </div>
                                    <div className="col-md py-2">
                                        <img src={Img_31} className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-md py-2">
                                        <img src={Img_32} className="img-fluid" alt="" />
                                    </div>
                                </div>
                                <div className="caption-carousel mt-3 mb-5 text-center">
                                    <h4>Yogyakrta</h4>
                                    <p className="">Yogyakarta menjunjung tinggi adat-istiadat dan terkenal ramah tamah</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </>
        ) 
        
    }
}
