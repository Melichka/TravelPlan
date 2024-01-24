import React from "react";
import ReactDOM from "react-dom/client";
import i18n from "./i18n";

import App from "./App";

import "./index.scss";

import "./i18n";
import { I18nextProvider } from "react-i18next";

const rootContainer = document.getElementById("root");
if (rootContainer) {
  const root = ReactDOM.createRoot(rootContainer);
  root.render(
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  );
}
