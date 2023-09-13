import React from "react"
import MovieList from './components/MovieList';

export default function Body() {
    return (
        <div className="w-screen h-screen mx-auto my-16">
            <MovieList></MovieList>
        </div>
    )
}