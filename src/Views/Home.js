import React, { useEffect, useState } from "react";
import { useAPI } from "../api";
import Hero from "../components/Hero";
import Loading from "../components/Loading";
import SectionList from "../components/SectionList";
import { useMovies } from "../context/MoviesContext";
import { useShows } from "../context/ShowsContext";
import {getMergedArray, getRandomElementFromArray } from "../utils";

export default function Home() {
  const [loadPage, setLoadPage] = useState(false);

  const [highlight, setHighlight] = useState({});

  const {movies, setMovies} = useMovies();
  const {shows, setShows} = useShows();

  const {getMostPopularMovies, getMostPopularTVShows, getTopRatedMovies, getTopRatedTVShows } = useAPI()

  useEffect(async() => {

      setLoadPage(false);
      debugger;
      const {results : mostPopularMovies} = await getMostPopularMovies()
      const {results : topRatedMovies} = await getTopRatedMovies()

      setMovies({...movies, mostPopular: mostPopularMovies, topRated: topRatedMovies})

      const {results : mostPopularTVShows} = await getMostPopularTVShows()
      const {results : topRatedTVShows} = await getTopRatedTVShows()

      setShows({...shows, mostPopular: mostPopularTVShows, topRated: topRatedTVShows})

  }, []);

  useEffect(() => {
    if(Object.keys(movies).length >1 && Object.keys(shows).length >1){
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
          <div style={{margin:"400px"}}/>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
