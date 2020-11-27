import React from 'react'
import Partner_01 from '../../asset/3. Yogyakarta/trans jogja 1.png'

export default function Partner() {
    return (
        <>
            <section className="section-2">
                <div className="row justify-content-around">
                    <div className="col-md-3 align-self-center text-center">
                        <h4>Official Partner</h4>
                    </div>
                    <div className="col-md-3 text-center mb-2">
                        <img src={Partner_01} alt="" className="img-fluid"/>
                    </div>
                </div>
            </section>
        </>
    )
}
