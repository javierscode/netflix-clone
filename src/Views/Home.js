import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Loading from "../components/Loading";
import { useMovies } from "../context/MoviesContext";
import { useShows } from "../context/ShowsContext";
import { getRandomElementFromArray } from "../utils";

export default function Home() {
  const [loadPage, setLoadPage] = useState(false);

  const [highlight, setHighlight] = useState({});

  const movies = useMovies();
  const shows = useShows();

  useEffect(() => {
    if (movies.length == 0 || shows.length == 0) {
      setLoadPage(false);
    } else {
      const desicion = getRandomElementFromArray(["movies", "shows"]);

      desicion == "movies"
        ? setHighlight(getRandomElementFromArray(movies))
        : setHighlight(getRandomElementFromArray(shows));

      setTimeout(() => setLoadPage(true), 1000);
    }
  }, [movies, shows]);

  return (
    <>
      {loadPage ? (
        <>
          <Hero {...highlight} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
