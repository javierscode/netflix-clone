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
        return await getData('movie/popular')
    }

    const getHighlight = async()=>{
        
        const endPoints = ['movie/popular','tv/popular']
        const {results}= await getData(getRandomElementFromArray(endPoints));
        return getRandomElementFromArray(results)

    }
    

    return {...state, getMostPopularMovies, getHighlight}

}