import React from "react";

const Hero = () => {
  return (
    <div
      class="hero"
      style={{
        backgroundImage: "url(" + getOriginalImage(data.backdrop_path) + ")",
      }}
    >
      <h1>{data.name ? data.name : data.original_title}</h1>
    </div>
  );
};

export default Hero;
