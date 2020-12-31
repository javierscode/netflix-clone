import React from "react";
import { getOriginalImage } from "../utils";

const Hero = (props) => {
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
