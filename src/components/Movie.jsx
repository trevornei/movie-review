import React from 'react'
import ReviewForm from './ReviewForm'
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

    // console.log(movieInfo)
    // console.log(movieInfo.reviews);
    return (
        <div className="row-span-1 col-span-1 h-full bg-tertiary rounded-xl shadow-lg hover:shadow-xl hover:shadow-lightg hover:duration-300 hover:cursor-cam py-8">
            <div className="w-3/4 h-full bg-primary mx-auto rounded-xl py-8">
                <div className="flex flex-col items-center justify-center" id='PosterSynopsis'>
                    <img src={movieInfo.img} className='rounded-2xl shadow-lg mb-4 mt-4 shadow-black max-w-xs' alt="Movie Poster" />
                    <h1 className='text-3xl mx-32 text-limez font-arsenica text-extrabold'>{movieInfo.title}</h1>
                    <p className="font-moret mx-32 text-white text-lg">{movieInfo.synopsis}</p>
                </div>
                <div className="mt-8 bg-secondary w-full h-auto rounded-xl shadow-xl shadow-black" id="reviewForm">
                    <ReviewList reviews={movieInfo.reviews}/>
                    <ReviewForm/>
                </div>
            </div>
        </div> 
    )
}