import React from "react";
import ReactDOM from "react-dom";
import GlobalContext from "./context/Global";
import Router from "./context/Router";
import routes from "./routes";
import "./styles/app.scss";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContext>
      <Router routes={routes} />
    </GlobalContext>
  </React.StrictMode>,
  document.getElementById("root")
);
