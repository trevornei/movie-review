import React from 'react'
import Movie from './Movie'

export default function MovieList () {
    return (
        <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-8 mx-24">
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
        </div>
    )
}