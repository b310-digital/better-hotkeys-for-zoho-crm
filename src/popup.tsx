/**
 * This is a popup view
 * This script is bundled and imported by
 * popup.html
 */

import React from "react";
import ReactDOM from "react-dom";
import App from "./Popup/App";
import "bulma/css/bulma.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
