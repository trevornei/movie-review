import { Rating } from "@mui/material";
import React from "react";

export default function Review({ reviewData  }) {
    return (
            <div className="flex flex-col items-center justify-center border-4 border-primary rounded-xl p-4 m-2 shadow-limez shadow-lg w-full">
                <h3 className="font-arsenica text-2xl text-limez">Review</h3>
                <Rating
                readOnly
                value={reviewData.rating}
                />
                <p className="font-moret text-white">"{reviewData.opinion}"</p>
                <p className="font-moret text-black">- {reviewData.name}</p>
            </div>
    )
}