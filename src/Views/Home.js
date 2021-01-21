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

  const {getMostPopularMovies, getMostPopularTVShows } = useAPI()

  useEffect(async() => {

    if (Object.keys(movies).length == 0 || Object.keys(shows).length == 0) {

      setLoadPage(false);

      const {results : mostPopularMovies} = await getMostPopularMovies()
      setMovies({...movies, mostPopular: mostPopularMovies })

      const {results : mostPopularTVShows} = await getMostPopularTVShows()
      setShows({...shows, mostPopular: mostPopularTVShows})

    } else {
      setRandomHighligh();
      setTimeout(() => setLoadPage(true), 500);
    }
  }, [, movies, shows]);


  const setRandomHighligh = () =>{
      const decision = getRandomElementFromArray(["movies", "shows"]);
      const selected= decision == "movies"
        ? getRandomElementFromArray(movies.mostPopular)
        : getRandomElementFromArray(shows.mostPopular);
      selected.type= decision;
      setHighlight(selected)
    }
function
  return (
    <>
      {loadPage ? (
        <>
          <Hero {...highlight}  />
          <SectionList title="Most Popular" list={getMergedArray(movies.mostPopular,shows.mostPopular)}/>
          <div style={{margin:"400px"}}/>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
