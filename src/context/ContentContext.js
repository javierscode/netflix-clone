import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAPI } from "../api";
import {
  getMergedArray,
  getRandomElementFromArray,
  getStandardItemsArray,
} from "../utils";

const ContentContext = React.createContext({});

export const ContentProvider = (props) => {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [highlighted, setHighlighted] = useState(null);
  const [mostPopular, setMostPopular] = useState(null);
  const [topRated, setTopRated] = useState(null);
  const [netflixOriginals, setNetflixOriginals] = useState(null);

  return (
    <ContentContext.Provider
      value={{
        contentLoaded,
        setContentLoaded,
        highlighted,
        setHighlighted,
        mostPopular,
        setMostPopular,
        topRated,
        setTopRated,
        netflixOriginals,
        setNetflixOriginals,
      }}
      {...props}
    >
      {props.children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = React.useContext(ContentContext);
  const { pathname } = useLocation();
  const {
    getMostPopularMovies,
    getMostPopularTVShows,
    getVideosFromTVShow,
    getVideosFromMovie,
    getTopRatedMovies,
    getTopRatedTVShows,
    getNetflixOriginalsMovies,
    getNetflixOriginalsTVShows,
  } = useAPI();

  if (!context) {
    throw new Error(
      "useContent debe estar dentro del proveedor ContentContext"
    );
  }

  const {
    contentLoaded,
    setContentLoaded,
    highlighted,
    setHighlighted,
    mostPopular,
    setMostPopular,
    topRated,
    setTopRated,
    netflixOriginals,
    setNetflixOriginals,
  } = context;

  const decideHighlighted = async (array) => {
    const randomItem = getRandomElementFromArray(array);

    const getHighlightedVideo =
      randomItem.type == "movie" ? getVideosFromMovie : getVideosFromTVShow;

    const result = await getHighlightedVideo(randomItem.id);

    let youtubeID = null;
    if (result.length > 0) {
      youtubeID = result[0].key;
    }
    setHighlighted({ ...randomItem, youtubeID });
  };

  const fetchContent = async () => {
    switch (pathname) {
      case "/":

        const [
          mostPopularMovies,
          mostPopularTVShows,
          topRatedMovies,
          topRatedTVShows,
          netflixOriginalsMovies,
          netflixOriginalsTVShows,
        ]  = await Promise.all([
          getMostPopularMovies(),
          getMostPopularTVShows(),
          getTopRatedMovies(),
          getTopRatedTVShows(),
          getNetflixOriginalsMovies(),
          getNetflixOriginalsTVShows(),
        ]).then((data)=> data.map(getStandardItemsArray));

        const mostPopularArray = getMergedArray(
          mostPopularMovies,
          mostPopularTVShows
        );
        setMostPopular(mostPopularArray);

        await decideHighlighted(mostPopularArray);

        const topRatedArray = getMergedArray(
          topRatedMovies,
          topRatedTVShows,
        );
        setTopRated(topRatedArray);

        const netflixOriginalsArray = getMergedArray(
          netflixOriginalsMovies,
          netflixOriginalsTVShows,
        );
        setNetflixOriginals(netflixOriginalsArray);

        setContentLoaded(true);

        break;
      case "/movies":
        break;
      case "/shows":
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    !contentLoaded && fetchContent();
  }, []);

  return { contentLoaded, highlighted, mostPopular, topRated, netflixOriginals };
};
