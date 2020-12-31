import React from "react";
import { Link} from "react-router-dom";


export const Header = () => {
  return (
    <header className="header">
      <img
        src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
      />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/shows">TV Shows</Link></li>
      </ul>
      <form>
        <input type="text" />
        <button>Search</button>
      </form>
    </header>
  );
};
