import React, { useEffect, useState } from "react";
import { useAPI } from "../api";
import { getOriginalImage } from "../utils";

const Hero = (props) => {


  const [videos, setVideos] = useState({})

  const {getVideosFromMovie, getVideosFromTVShow} = useAPI();

  useEffect(async() => {
    
    if(props.type == 'movies'){

      const {results} = await getVideosFromMovie(props.id);
      console.log(results)
    } else {
      const {results} = await getVideosFromTVShow(props.id);
      console.log(results)
    }

  }, [])

  return (
    <div
      className="hero"
      style={{
        backgroundImage: "url(" + getOriginalImage(props.backdrop_path) + ")",
      }}
    >
      <h1>{props.name ? props.name : props.original_title}</h1>
    </div>
  );
};

export default Hero;
