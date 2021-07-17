import React from "react";
import styles from "./Header.module.css";

const Header = ({ children }) => {
    const ArrayOfChildren = React.Children.toArray(children);

    return (
        <header className={styles.header}>
            <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" />
            <ul>
                {ArrayOfChildren.map((link, index) => (
                    <li key={index}>{link}</li>
                ))}
            </ul>
            <form>
                <input type="text" />
                <button>Search</button>
            </form>
        </header>
    );
};

export default Header;
