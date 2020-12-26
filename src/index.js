import './styles/index.css';

import React, { useState } from "react";
import { render } from "react-dom";

function App() {
    const [state, setState] = useState("CLICK ME");

    return (<> 
    <h1>Hola esto es una prueba</h1>
    <button onClick={() => setState("hola")}>{state}</button></>);
}

render(<App />, document.getElementById("root"));
