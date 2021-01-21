import React, { useState, useEffect } from "react";
import { useAPI } from "../api";

const ShowsContext = React.createContext({});

export const ShowsProvider = ( props ) => {

    const [shows, setShows] = useState({});

    return (<ShowsContext.Provider value={{shows, setShows}} {...props}>
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