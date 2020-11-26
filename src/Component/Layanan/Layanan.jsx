import React, { Component } from 'react'
import Vector_01 from '../../asset/ilustrasi/Croods Mobile.png'


export default class Layanan extends Component {
    render() {
        return (
            <>
                <section className="section-layanan" id="layanan">
                        <div className="row justify-content-center">
                        <div className="col-md-6 text-center">
                            <img src={Vector_01} alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-6 search-trip">
                            <h4 className="p-3">Temukan Perjalananmu</h4>
                            <form>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                <select className="form-control px-1">
                                    <option selected>Yogyakarta</option>
                                </select>
                                </div>
                                <div className="form-group col pr-0">
                                <select className="form-control px-1">
                                    <option selected>Origin</option>
                                    <option value="1">Jl. Yos Sudarso</option>
                                    <option value="2">Terminal Jombor</option>
                                    <option value="3">Jl. Prof. Dr. Sardjito</option>
                                    <option value="4">Jl. Laksda Adisucipto</option>
                                    <option value="5">Jl. Teknika Selatan (UGM)</option>
                                </select>
                                </div><i className="fas fa-sync text-dark m-0 mt-2"></i>
                                <div className="form-group col pl-0">
                                <select className="form-control px-1">
                                    <option selected>Destination</option>
                                    <option value="1">Jl. Kusumanegara</option>
                                    <option value="2">Jl. Jlagran Lor</option>
                                    <option value="3">Jl. Imogiri Timur</option>
                                    <option value="4">Terminal Giwangan</option>
                                    <option value="5">Jl. Malioboro</option>
                                </select>
                                </div>
                            </div>
                            <a href="#" role="button" className="btn btn-light btn-block mb-3"><i
                                className="fas fa-search mr-2"></i>Search</a>
                            </form>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
