import React from "react"
import Review from './Review'

export default function ReviewList({reviews}) {
  
  return (
    <div className="w-3/4 flex flex-col items-center justify-center h-auto bg-primary[.8] mx-auto rounded-xl">
      {reviews.map((review, index) => (
        <Review key={index} reviewData={review}/>
      ))}
    </div>
  )
}