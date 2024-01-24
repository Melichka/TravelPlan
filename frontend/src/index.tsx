import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.scss";

import "./i18n";

const rootContainer = document.getElementById("root");
if (rootContainer) {
  const root = ReactDOM.createRoot(rootContainer);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
