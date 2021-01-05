import React, { useEffect, useState } from "react";
import { useAPI } from "../api";
import { getOriginalImage, getRandomElementFromArray } from "../utils";
import YoutubePlayer from "./YoutubePlayer";

const Hero = (props) => {


  const [video, setVideo] = useState(null)

  const {getVideosFromMovie, getVideosFromTVShow} = useAPI();



  

  useEffect(async() => {
    

    if(props.type == 'movies'){

      const {results} = await getVideosFromMovie(props.id);

      results.filter( video => video.site == "YouTube")
      results.length!=0 ? setVideo(getRandomElementFromArray(results)): null;
    } else {
      const {results} = await getVideosFromTVShow(props.id);
      results.filter( video => video.site == "YouTube")
      results.length!=0 ? setVideo(getRandomElementFromArray(results)): null;
    }
    

  }, [])

  return (
    <div
      className="hero"
      style={{
        backgroundImage: "url(" + getOriginalImage(props.backdrop_path) + ")",
      }}
    > 
    <div className="content">
      <h1>{props.name ? props.name : props.title}</h1>
      <p>{props.overview ? props.overview : props.title}</p>
      <button className="btn-secundary">More information</button>
    </div>
      {video!=null ? <YoutubePlayer id={video.key}/> : null}
    </div>
  );
};

export default Hero;
