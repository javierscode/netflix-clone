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
  const [loading, setLoading] = useState(true);
  const [highlighted, setHighlighted] = useState(null);
  const [mostPopular, setMostPopular] = useState(null);

  return (
    <ContentContext.Provider
      value={{
        loading,
        setLoading,
        highlighted,
        setHighlighted,
        mostPopular,
        setMostPopular,
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
  } = useAPI();

  if (!context) {
    throw new Error(
      "useContent debe estar dentro del proveedor ContentContext"
    );
  }

  const {
    loading,
    setLoading,
    highlighted,
    setHighlighted,
    mostPopular,
    setMostPopular,
  } = context;

  useEffect(() => {
    switch (pathname) {
      case "/":
        !!!mostPopular &&
          Promise.all([getMostPopularMovies(), getMostPopularTVShows()]).then(
            ([mostPopularMovies, mostPopularTVShows]) => {
              const mostPopularArray = getMergedArray(
                getStandardItemsArray(mostPopularMovies),
                getStandardItemsArray(mostPopularTVShows)
              );
              setMostPopular(mostPopularArray);

              const randomItem = getRandomElementFromArray(mostPopularArray);
              const callback =
                randomItem.type == "movie"
                  ? getVideosFromMovie
                  : getVideosFromTVShow;
              callback(randomItem.id).then((result) => {
                let youtubeID = null
                if(result.length > 0){
                    youtubeID = result[0].key
                }
                setHighlighted({ ...randomItem, youtubeID });
                setLoading(false);

              });

            }
          );
        break;
      case "/movies":
        break;
      case "/shows":
        break;

      default:
        break;
    }
  }),
    [];

  return { loading, highlighted, mostPopular };
};
