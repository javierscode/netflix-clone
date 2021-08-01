import React, { useEffect, useState } from "react";
import styles from "./YoutubePlayer.module.css";
import PropTypes from "prop-types";

const getYoutubeURL = (id) =>
    "https://www.youtube.com/embed/" +
    id +
    "?vq=hd1080" +
    "&controls=0" +
    "&showinfo=0" +
    "&rel=0" +
    "&autoplay=1" +
    "&loop=1" +
    "&playlist=" +
    id +
    "&modestbranding=1" +
    "&disablekb=1" +
    "&iv_load_policy=3" +
    "&mute=1";

function YoutubePlayer({ id }) {
    const [opacityValue, setOpacityValue] = useState(0);

    const url = getYoutubeURL(id);

    useEffect(() => {
        setTimeout(() => {
            setOpacityValue(1);
        }, 3000);
    }, []);

    return (
        <iframe
            style={{ opacity: opacityValue }}
            className={styles.youtubeplayer}
            src={url}
            frameBorder="0"
            allowFullScreen
        ></iframe>
    );
}

YoutubePlayer.propTypes = {
    id: PropTypes.string,
};

export default YoutubePlayer;
