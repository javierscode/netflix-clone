import React, { useEffect, useRef } from "react";
import Arrow from "../../icons/Arrow";
import Card from "../../atoms/Card";
import styles from "./CardList.module.css";

const CardList = ({ title, list, vertical = false }) => {
    const listRef = useRef(null);
    const leftRef = useRef(null);

    const MoveTo = (type) => {
        const moves = {
            left: -360,
            right: +360,
        };

        let scroll = listRef.current.scrollLeft + moves[type];

        listRef.current.scrollTo({
            left: scroll,
            behavior: "smooth",
        });

        scroll <= 0
            ? (leftRef.current.style.opacity = "0")
            : (leftRef.current.style.opacity = "1");
    };

    useEffect(() => {
        listRef.current.scrollLeft <= 0
            ? (leftRef.current.style.opacity = "0")
            : (leftRef.current.style.opacity = "1");
    }, []);

    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <div
                className={styles.controls}
                style={vertical ? { top: "250px" } : null}
            >
                <div ref={leftRef} onClick={() => MoveTo("left")}>
                    <Arrow fill="#ffffff" height="30px" />
                </div>
                <div onClick={() => MoveTo("right")}>
                    <Arrow
                        fill="#ffffff"
                        height="30px"
                        transform="rotate(180)"
                    />
                </div>
            </div>
            <div className={styles.list} ref={listRef}>
                {list.map((item, index) => {
                    return (
                        <div key={index} style={{ padding: "0 10px" }}>
                            <Card
                                title={item.title}
                                imageURL={vertical ? item.images.vertical : item.images.horizontal}
                                large={vertical}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default CardList;
