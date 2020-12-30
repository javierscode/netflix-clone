import "./styles/index.css";

import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { useAPI } from "./api";
import { getOriginalImage } from "./utils";


function App() {
  const {getHighlight, loading } = useAPI();

  const [data, setData] = useState({});

  useEffect(async() => {
    setData(await getHighlight())
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return loading ||data=={} ? 'Loading...':  
  (
    <>
      <Header />
      <div class="hero" style={{backgroundImage:"url("+getOriginalImage(data.backdrop_path)+")"}}>

      </div>
    </>
  );
}

render(<App />, document.getElementById("root"));
