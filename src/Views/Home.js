import React, { useEffect, useState } from "react";
import { useAPI } from "../api";
import Hero from "../components/Hero";
import Loading from "../components/Loading";
import SectionGenerator from "../components/SectionGenerator";
import SectionList from "../components/SectionList";
import { useMovies } from "../context/MoviesContext";
import { useShows } from "../context/ShowsContext";
import {getMergedArray, getRandomElementFromArray } from "../utils";

export default function Home() {
  const [loadPage, setLoadPage] = useState(false);

  const [highlight, setHighlight] = useState({});

  const {movies, setMovies} = useMovies();
  const {shows, setShows} = useShows();

  const {getMostPopularMovies, getMostPopularTVShows, getTopRatedMovies, getTopRatedTVShows, getNetflixOriginalsMovies, getNetflixOriginalsTVShows , getListOfMoviesGenre, getListOfTVShowsGenre} = useAPI()

  useEffect(async() => {

      setLoadPage(false);

      const {results : mostPopularMovies} = await getMostPopularMovies()
      const {results : topRatedMovies} = await getTopRatedMovies()
      const {results : netflixOriginalsMovies} = await getNetflixOriginalsMovies()
      const {genres : MoviesGenres} = await getListOfMoviesGenre()

      setMovies({...movies, mostPopular: mostPopularMovies, topRated: topRatedMovies, netflixOriginals : netflixOriginalsMovies, MoviesGenres})

      const {results : mostPopularTVShows} = await getMostPopularTVShows()
      const {results : topRatedTVShows} = await getTopRatedTVShows()
      const {results : netflixOriginalsTVShows} = await getNetflixOriginalsTVShows()
      const {genres : TVShowsGenres} = await getListOfTVShowsGenre()


      setShows({...shows, mostPopular: mostPopularTVShows, topRated: topRatedTVShows, netflixOriginals:netflixOriginalsTVShows,TVShowsGenres})

  }, []);

  useEffect(() => {
    if(Object.keys(movies).length >2 && Object.keys(shows).length >2){
      setRandomHighligh();
      setTimeout(() => setLoadPage(true), 500);
    }
  }, [movies,shows])

  const setRandomHighligh = () =>{
      const decision = getRandomElementFromArray(["movies", "shows"]);
      const selected= decision == "movies"
        ? getRandomElementFromArray(movies.mostPopular)
        : getRandomElementFromArray(shows.mostPopular);
      selected.type= decision;
      setHighlight(selected)
    }

  return (
    <>
      {loadPage ? (
        <>
          <Hero {...highlight}  />
          <SectionList title="Most Popular" list={getMergedArray(movies.mostPopular,shows.mostPopular)}/>
          <SectionList title="Top Rated" list={getMergedArray(movies.topRated, shows.topRated)}/>
          <SectionList title="Netflix Originals" list={getMergedArray(movies.netflixOriginals, shows.netflixOriginals)} vertical={true}/>
          {movies.MoviesGenres ? <SectionGenerator genres={movies.MoviesGenres} type="movies" max={4}/>: null}
          {shows.TVShowsGenres ? <SectionGenerator genres={shows.TVShowsGenres} type="shows" max={4}/>: null}
          <div style={{margin:"400px"}}/>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
