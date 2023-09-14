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
        <div className="row-span-1 col-span-1 m- bg-tertiary rounded-xl shadow-lg hover:shadow-xl hover:shadow-lightg hover:duration-300 hover:cursor-cam">
            <div className="flex flex-col" id='PosterSynopsis'>
                <img src={movieInfo.img} className='rounded-2xl shadow-lg mx-auto mt-10 mb-4 shadow-black' alt="Movie Poster" />
                <h1 className='text-3xl mx-32 font-arsenica text-extrabold'>{movieInfo.title}</h1>
                <p className="font-moret mx-32 text-lg">{movieInfo.synopsis}</p>
                {/* revioew should go to  your reviewList */}
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