import React from 'react'
import Review from './Review.jsx'
import ReviewList from './ReviewList.jsx'

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

export default function Movie({movieInfo}) {

    console.log(movieInfo)
    return (
        <div className="row-span-1 col-span-1 bg-tertiary rounded-xl shadow-lg hover:shadow-xl hover:shadow-lightg hover:duration-300 hover:cursor-cam">
            <div className="" id='PosterSynopsis'>

                <h1>{movieInfo.title}</h1>
                {/* revioew should go to  your reviewList */}
                <Review></Review>
            </div>
            <div className="" id="reviewForm">
                <div className="" id="reviews">

                </div>
                <div className="" id="form">

                </div>
               <ReviewList />
            </div>
        </div> 
    )
}