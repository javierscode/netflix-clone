import { useState } from "react";
import { getRandomElementFromArray } from "../utils";
import { API_KEY, API_URL } from "./config";

export const useAPI = () => {
    const [state, setState] = useState({ loading: false, error: false });

    const getData = async (endpoint, page = 1, extraParameters = "") => {
        try {
            const result = await fetch(
                API_URL + endpoint + API_KEY + "&page=" + page + extraParameters
            );
            const data = await result.json();
            const { results } = data;
            return results ? results : data;
        } catch (error) {
            throw new Error("Algo ha ido mal en la petición a la API");
        }
    };

    const getMostPopularMovies = () => {
        return getData("/movie/popular");
    };

    const getMostPopularTVShows = () => {
        return getData("/tv/popular");
    };

    const getTopRatedMovies = async () => {
        return await getData("/movie/top_rated");
    };

    const getTopRatedTVShows = async () => {
        return await getData("/tv/top_rated");
    };

    const getVideosFromMovie = async (id) => {
        const endpoint = `/movie/${id}/videos`;
        return await getData(endpoint);
    };

    const getVideosFromTVShow = async (id) => {
        const endpoint = `/tv/${id}/videos`;
        return await getData(endpoint);
    };

    const getNetflixOriginalsMovies = async () => {
        return await getData("/movie/popular", 1, "&with_networks=213");
    };

    const getNetflixOriginalsTVShows = async () => {
        return await getData("/tv/popular", 1, "&with_networks=213");
    };

    const getMoviesByGenre = async (id) => {
        return await getData("/movie/popular", 1, `&with_genres=${id}`);
    };

    const getTVShowsByGenre = async (id) => {
        return await getData("/tv/popular", 1, `&with_genres=${id}`);
    };

    const getListOfMoviesGenre = async () => {
        return await getData("/genre/movie/list");
    };

    const getListOfTVShowsGenre = async () => {
        return await getData("/genre/tv/list");
    };

    const getRandomMovie = async () => {
        return getRandomElementFromArray(await getMostPopularMovies());
    };

    return {
        ...state,
        getMostPopularMovies,
        getMostPopularTVShows,
        getVideosFromMovie,
        getVideosFromTVShow,
        getTopRatedMovies,
        getTopRatedTVShows,
        getNetflixOriginalsMovies,
        getNetflixOriginalsTVShows,
        getMoviesByGenre,
        getTVShowsByGenre,
        getListOfMoviesGenre,
        getListOfTVShowsGenre,
        getRandomMovie,
    };
};
