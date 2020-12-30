import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <img
        src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
      />
      <ul>
        <li>Home</li>
        <li>Series</li>
        <li>Movies</li>
      </ul>
      <form>
        <input type="text" />
        <button>Search</button>
      </form>
    </header>
  );
};
