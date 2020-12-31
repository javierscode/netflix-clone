import React, { useEffect, useState } from 'react'
import { useMovies } from '../context/MoviesContext'
import { useShows } from '../context/ShowsContext';

export default function Home() {

    const movies = useMovies()
    const shows= useShows()

    console.log(movies);
    console.log(shows);


    return (
        <div>
            Home
        </div>
    )
}
