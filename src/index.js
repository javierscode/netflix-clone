import "./styles/index.css";

import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { MoviesProvider } from "./context/MoviesContext";
import { ShowsProvider } from "./context/ShowsContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Views/Home";
import Movies from "./Views/Movies";
import Shows from "./Views/Shows";

function App() {
  return (
    <MoviesProvider>
      <ShowsProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/shows" component={Shows} />
          </Switch>
        </Router>
      </ShowsProvider>
    </MoviesProvider>
  );
}

render(<App />, document.getElementById("root"));
