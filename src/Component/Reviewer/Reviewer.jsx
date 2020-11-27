import React from 'react'

export default function Reviewer(props) {
    const {img, star, feedback} = props
    return (
        <>
            <div className="col-sm-4 text-center">
                <img src={img} alt="" className=""/>
                <div className="card">
                    <div className="card-body">
                    <div className="star">
                        {/* <i className="fas fa-star star-orange mr-1"></i><i className="fas fa-star star-orange mr-1"></i><i
                        className="fas fa-star star-orange mr-1"></i><i className="fas fa-star star-orange mr-1"></i><i
                        className="fas fa-star"></i> */}
                        {star}
                    </div>
                    <p className="card-text text-center">{feedback}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
