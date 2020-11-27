import React from 'react'

export default function News(props) {
    const {img, title} = props
    return (
        <>
            <div className="col-md-3">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <p className="card-text text-center">{title}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
