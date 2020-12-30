import "./styles/index.css";

import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header/>
    </>
  );
}

render(<App />, document.getElementById("root"));
