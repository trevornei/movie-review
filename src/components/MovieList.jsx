import React from 'react'
import Movie from './Movie'

// NOTE: Fixed heights for grid containers prevents grid containers to expand with the needs of the child elements. Changed height to => h-auto

export default function MovieList () {
    return (
        <div className="w-auto h-auto grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-8 mx-24">
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
        </div>
    )
}