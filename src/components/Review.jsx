import React from "react";

export default function Review({ reviewData }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <h3 className="font-arsenica text-xl text-limez">Review</h3>
            <p className="font-moret text-white">"{reviewData.opinion}"</p>
            <p className="font-moret text-white">- {reviewData.name}</p>
        </div>
    )
}