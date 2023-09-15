import React from 'react' 
import Review from './MovieList'

export default function ReviewForm({  }) {
//need to set state in this component so it triggers a 
//rerender on the dom, whenever the reivews array updates

  return (
    <div className='flex flex-col items-center justify-center mt-6'>
      <h3 className='font-arsenica text-2xl tracking-widest text-limez'>Leave a Review!</h3>
      <form action="" className="flex flex-col items-center justify-center">
        <div className="m-2 w-full h-auto">
          <label htmlFor="" className=""></label>
          <input type="text" className="rounded-lg w-full placeholder:text-primary placeholder:font-moret placeholder:tracking-wide text-secondary font-moret tracking-wide " placeholder='Full Name'/>
        </div>
        <div className="m-2 w-full h-auto">
          <label htmlFor="" className=""></label>
          <input type="text" className="rounded-lg w-full h-6 placeholder:text-primary placeholder:font-moret placeholder:tracking-wide text-secondary font-moret tracking-wide " placeholder='Review'/>
        </div>
        <button type="submit" className='bg-primary rounded-xl p-1 m-2 shadow-primary shadow-lg'>
          <p className='font-moret text-xl tracking-widest text-limez'>Submit</p>
        </button>
      </form>
    </div>
  )
}
