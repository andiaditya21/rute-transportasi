import React from 'react'

export default function Wcu(props) {
    const {img, feedback} = props
    return (
        <>
            <div className="col-md-4">
                <div className="card card-wcu">
                    <img src={img} className="card-img-top img-fluid" alt="..."/>
                    <div className="card-body">
                    <p className="card-text text-center">{feedback}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
