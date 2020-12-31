import React, { useState, useEffect } from "react";
import { useAPI } from "../api";

const ShowsContext = React.createContext({});

export const ShowsProvider = ( props ) => {

    const [shows, setShows] = useState([]);
    const {getMostPopularTVShows} = useAPI()

    useEffect(() => {
        if(shows.length==0){
            const data= getMostPopularTVShows()
            setShows(data);
        }
    }, [])


    return (<ShowsContext.Provider value={shows} {...props}>
        {props.children}
    </ShowsContext.Provider>)
};


export const useShows = () =>{

    const context = React.useContext(ShowsContext);

    if(!context){
        throw new Error('useShows debe estar dentro del proveedor ShowsContext');
    }

    return context;
}


export default ShowsContext