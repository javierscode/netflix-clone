import {useState} from 'react'
import { API_KEY, API_URL } from './config';

export const useAPI = () =>{

    const [state, setState] = useState({ loading: false, error: false , data: null})


    const getData= async(endpoint) =>{

        setState({...state, loading:true, error:false});
        try {
            
            const result = await fetch(API_URL+endpoint+API_KEY);
            const data = await result.json();

            setState({ loading: false, error: false , data});
        } catch (error) {
            setState({...state, loading:false, error});
        }

    }

    const getMostPopularMovies = ()=>{
        return getData('movie/popular')
    }

    return {...state, getMostPopularMovies}

}