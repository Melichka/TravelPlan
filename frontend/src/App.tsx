import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

import { CityPage } from "src/pages/city";
import { SearchPage } from "src/pages/search";
import { SignInPage } from "src/pages/signIn";

import { Style } from "./pages/style/components";

import { useTranslation, Trans } from "react-i18next";

import "./index.scss";

import "./i18n";

function App() {
  const theme = createTheme(Style());

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={SearchPage} />
            <Route path="/city" Component={CityPage} />
            <Route path="/sign-in" Component={SignInPage} />
            <Route path="*" element={<h3>404</h3>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
