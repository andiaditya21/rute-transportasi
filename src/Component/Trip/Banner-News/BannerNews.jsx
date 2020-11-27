import React from 'react'
import News_01 from '../../../asset/news/covid-19.png'

export default function BannerNews() {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide pb-5" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="container">
                        <div className="carousel-item active">
                            <div className="row justify-content-around">
                                <div className="col-md-4 col-lg-3 text-center">
                                    <img src={News_01} alt="..."/>
                                </div>
                                <div className="col-10 col-md-5 col-lg-6 pt-1">
                                    <h4>Covid-19 News</h4>
                                    <p>Virus Corona atau severe acute respiratory syndrome coronavirus 2
                                        (SARS-CoV-2) adalah virus yang menyerang sistem pernapasan.
                                        Penyakit karena infeksi virus ini disebut COVID-19. Virus Corona bisa
                                        menyebabkan gangguan ringan pada sistem pernapasan, infeksi paru
                                        -paru yang berat, hingga kematian.</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row justify-content-around">
                                <div className="col-md-4 col-lg-3 text-center">
                                    <img src={News_01} alt="..."/>
                                </div>
                                <div className="col-10 col-md-5 col-lg-6 pt-1">
                                    <h4>Covid-19 News</h4>
                                    <p>Virus Corona atau severe acute respiratory syndrome coronavirus 2
                                        (SARS-CoV-2) adalah virus yang menyerang sistem pernapasan.
                                        Penyakit karena infeksi virus ini disebut COVID-19. Virus Corona bisa
                                        menyebabkan gangguan ringan pada sistem pernapasan, infeksi paru
                                        -paru yang berat, hingga kematian.</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row justify-content-around">
                                <div className="col-md-4 col-lg-3 text-center">
                                    <img src={News_01} alt="..."/>
                                </div>
                                <div className="col-10 col-md-5 col-lg-6 pt-1">
                                    <h4>Covid-19 News</h4>
                                    <p>Virus Corona atau severe acute respiratory syndrome coronavirus 2
                                        (SARS-CoV-2) adalah virus yang menyerang sistem pernapasan.
                                        Penyakit karena infeksi virus ini disebut COVID-19. Virus Corona bisa
                                        menyebabkan gangguan ringan pada sistem pernapasan, infeksi paru
                                        -paru yang berat, hingga kematian.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}
