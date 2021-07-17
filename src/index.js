import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/index.css";

import { ContentProvider } from "./context/ContentContext";

import Home from "./Views/Home";
import Movies from "./Views/Movies";
import Shows from "./Views/Shows";
import Header from "./components/atoms/Header";

function App() {
    return (
        <ContentProvider>
            <Router>
                <Header>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/shows">TV Shows</Link>
                </Header>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/movies" component={Movies} />
                    <Route exact path="/shows" component={Shows} />
                </Switch>
            </Router>
        </ContentProvider>
    );
}

render(<App />, document.getElementById("root"));
