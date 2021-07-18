import React from "react";
import PropTypes from "prop-types";
import { item, title as titleStyle } from "./Card.module.css";

const Card = ({ imageURL, title, large = false }) => {
  const backgroundImage = imageURL
    ? "url('" + imageURL + "')"
    : "linear-gradient(#686868, #4c4c4c)";
  const height = large ? "600px" : "200px";
  return (
    <div
      className={item}
      style={{
        backgroundImage,
        height,
      }}
    >
      <h3 className={titleStyle}>{title}</h3>
    </div>
  );
};

Card.propTypes = {
  imageURL: PropTypes.string,
  title: PropTypes.string.isRequired,
  height: PropTypes.bool,
};

export default Card;
