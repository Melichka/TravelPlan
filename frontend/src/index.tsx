import React from "react";
import ReactDOM from "react-dom/client"

import App from "./App"

import "./index.css"

const rootContainer = document.getElementById("root")
if (rootContainer) {
  const root = ReactDOM.createRoot(rootContainer);

  root.render(
    <App />
  )
}
