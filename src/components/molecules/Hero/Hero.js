import React from "react";
import PropTypes from "prop-types";

import YoutubePlayer from "../../atoms/YoutubePlayer";
import styles from "./Hero.module.css";

const Hero = ({ title, description, backgroundImage, youtubeID }) => {
    return (
        <div
            className={styles.hero}
            style={{
                backgroundImage: `url("${backgroundImage}")`,
            }}
        >
            <div className={styles.content}>
                <h1>{title}</h1>
                {description && <p>{description}</p>}
                <button className={styles.btn}>More information</button>
            </div>
            {youtubeID && <YoutubePlayer id={youtubeID} />}
        </div>
    );
};

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    backgroundImage: PropTypes.string.isRequired,
    youtubeID: PropTypes.string,
};

export default Hero;
