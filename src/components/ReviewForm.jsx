import React from 'react' 
import { useState } from 'react';
import { Rating } from '@mui/material';
export default function ReviewForm({ reviews, addReview }) {
//need to set state in this component so it triggers a 
//rerender on the dom, whenever the reivews array updates

const [fullName, setFullName] = useState('')
const [reviewText, setReviewText] = useState('')
const [rating, setRating] = useState(null)

const handleSubmit = (e) => {
  e.preventDefault()

  const newReview = {
    id: reviews.length + 2,
    name: fullName,
    opinion: reviewText,
    rating: rating,
  }
  console.log(reviews)
  console.log(newReview)
  addReview(newReview);
  setFullName('')
  setReviewText('')
  console.log(reviews);
}

  return (
    <div className='flex flex-col items-center justify-center mt-6'>
      <h3 className='font-arsenica text-2xl tracking-widest text-limez'>Leave a Review!</h3>
      <form action="" onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
        <div className="m-2 w-full h-auto">
          <Rating
                  name="simple-controlled"
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}  
          
          />
          <label htmlFor="fullName"></label>
          <input 
          type="text" 
          className="rounded-lg w-full placeholder:text-primary placeholder:font-moret placeholder:tracking-wide text-secondary font-moret tracking-wide " 
          placeholder='Full Name' 
          id='fullName' 
          value={fullName} 
          onChange={e => setFullName(e.target.value)}
          />
        </div>
        <div className="m-2 w-full h-auto">
          <label htmlFor="reviewText"></label>
          <input 
          type="text" 
          className="rounded-lg w-full h-6 placeholder:text-primary placeholder:font-moret placeholder:tracking-wide text-secondary font-moret tracking-wide" placeholder='Review' 
          id='reviewText' 
          value={reviewText}
          onChange={e => setReviewText(e.target.value)}
          />
        </div>
        <button 
        type="submit" 
        className='bg-primary rounded-xl p-1 m-2 shadow-primary shadow-lg'
        >
          <p className='font-moret text-xl tracking-widest text-limez'>Submit</p>
        </button>
      </form>
    </div>
  )
}
