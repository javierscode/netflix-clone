import {useState} from 'react'
import { getRandomElementFromArray } from '../utils';
import { API_KEY, API_URL } from './config';

export const useAPI = () =>{

    const [state, setState] = useState({ loading: false, error: false })


    const getData= async(endpoint, page=1) =>{

        setState({loading:true, error:false});

        try {
            
            const result = await fetch(API_URL+endpoint+API_KEY+"&page="+page);
            const data = await result.json();

            setState({ loading: false, error: false} );
            return data;
            
        } catch (error) {
            setState({loading:false, error});
        }

    }

    const getMostPopularMovies = async()=>{
        return await getData('/movie/popular')
    }

    const getMostPopularTVShows = async()=>{
        return await getData('/tv/popular')
    }

    const getTopRatedMovies = async()=>{
        return await getData('/movie/top_rated')
    }

    const getTopRatedTVShows = async()=>{
        return await getData('/tv/top_rated')
    }


    const getVideosFromMovie = async(id)=>{

        const endpoint = `/movie/${id}/videos`
        return await getData(endpoint);

    }

    const getVideosFromTVShow = async(id)=>{

        const endpoint = `/tv/${id}/videos`
        return await getData(endpoint);

    }
    

    return {...state, getMostPopularMovies, getMostPopularTVShows, getVideosFromMovie,getVideosFromTVShow, getTopRatedMovies, getTopRatedTVShows}

}