import React from 'react'
import News_01 from '../../asset/news/news 1.png'
import News_02 from '../../asset/news/news 2.png'
import News_03 from '../../asset/news/news 3.png'
import News from './News'

export default function NewsList() {
    return (
        <>
            <section className="section-4 news">
                <div className="container">
                <h4 className="text-center pt-4 mb-5">News</h4>
                <div className="row justify-content-around">
                    <News img={News_01} title="Bingung mau keluar kota? Begini aturannya selama New Normal"/>
                    <News img={News_02} title="Kawasan wisata Kabupaten Bandung Barat mulai dibuka hari ini"/>
                    <News img={News_03} title="Sudah beroperasi, ini syarat naik Kereta Api jarak jauh"/>
                </div>
                </div>
            </section>
        </>
    )
}
