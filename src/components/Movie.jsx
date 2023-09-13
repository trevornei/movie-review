import React from 'react'

// NOTE: Goals
/*
    1. Div to span all components
        -Movie Poster
        -Synopsis 
        -Rating
    1.5 Review List:
        - Text Review
        1.8 Review Form:
        - Name and Comment
        - Review Text 
        - Submit Button(onClick) => Review Text!
*/

export default function Movie() {
    return (
        <div className="row-span-1 col-span-1 bg-tertiary rounded-xl">
            <div className="" id='PosterSynopsis'>
                <div className="" id="img">
                    
                </div>
                <div className="" id="synopsis">

                </div>
            </div>
            <div className="" id="reviewForm">
                <div className="" id="reviews">

                </div>
                <div className="" id="form">

                </div>
            </div>
        </div>
    )
}