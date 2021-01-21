import React, { useEffect, useRef, useState } from "react";
import { getOriginalImage } from "../utils";
import Arrow from "./icons/Arrow";

const SectionList = ({ title, list, vertical = false }) => {

  const listRef = useRef(null);
  const leftRef = useRef(null);

  const height = vertical ? "600px": "200px"; 

  const MoveTo =(type)=>{

    const moves ={
      "left": -360,
      "right": +360
    };

    let scroll = listRef.current.scrollLeft + moves[type]

    listRef.current.scrollTo({
      left: scroll,
      behavior: 'smooth'
    });

    scroll <= 0 ? leftRef.current.style.opacity = "0" : leftRef.current.style.opacity = "1";

  }

  useEffect(() => {
    listRef.current.scrollLeft <= 0 ? leftRef.current.style.opacity = "0" : leftRef.current.style.opacity = "1";
  }, [])

  return (
    <div className="section-list">
      <h2>{title}</h2>
      <div className="controls" style={vertical?{top:"250px"}:null}>
        <div ref={leftRef} onClick={()=> MoveTo('left')}><Arrow fill="#ffffff" height="30px"/></div>
        <div onClick={()=> MoveTo('right')}><Arrow fill="#ffffff" height="30px" transform="rotate(180)"/></div>
      </div>
      <div className="list" ref={listRef}>
        {list.map((item) => {
          const imageURL = vertical 
                ? item.poster_path ? item.poster_path : item.backdrop_path 
                : item.backdrop_path ? item.backdrop_path : item.poster_path;
          return (
          <div
            className="item"
            style={{
              backgroundImage:
                "url('" + getOriginalImage(imageURL) + "')",
                height
            }}
          >
            <h3>{item.name ? item.name : item.title}</h3>
          </div>
        )})}
      </div>

    </div>
  );
  
};
export default SectionList;
