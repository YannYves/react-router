import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import Router from "./routers/Router";

const App = () => (
  <div>
    <Router />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
