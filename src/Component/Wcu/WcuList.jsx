import React from 'react'
import Wcu from './Wcu'
import Vector_01 from '../../asset/ilustrasi/Croods Keeping in Touch.png'
import Vector_02 from '../../asset/ilustrasi/Cityscapes Downtown.png'
import Vector_03 from '../../asset/ilustrasi/Humaaans 2 Characters.png'

export default function WcuList() {
    return (
        <>
            <section className="section-3 why-choose-us">
                <div className="container">
                <h4 className="text-center pt-4 mb-5">Why Choose Us</h4>
                <div className="row">
                    <Wcu img={Vector_01} feedback="Memberikan panduan informasi perjalanan destinasi tujuan anda"/>
                    <Wcu img={Vector_02} feedback="Mendukung mengurai kemacetan dan polusi udara"/>
                    <Wcu img={Vector_03} feedback="Hidup menjadi lebih sehat dengan aktifitas jalan sehat setiap hari"/>
                </div>
                </div>
            </section>
        </>
    )
}
