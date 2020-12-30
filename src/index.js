import "./styles/index.css";

import React, { useEffect } from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { useAPI } from "./api";


function App() {
  const {getMostPopularMovies, loading, data } = useAPI();

  useEffect(() => {
    getMostPopularMovies();    
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {loading ? 'Loading...': <Header />}
    </>
  );
}

render(<App />, document.getElementById("root"));
