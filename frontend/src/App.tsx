import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

import { CityPage } from "src/pages/city";
import { SearchPage } from "src/pages/search";

import { useTranslation, Trans } from 'react-i18next';

import "./index.scss";

import "./i18n";

function App() {
  const theme = createTheme({});

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={SearchPage} />
              <Route path="/City" Component={CityPage} />
              <Route path="/SignIn" Component={SignInPage} />
              <Route path="*" element={<h3>404</h3>} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
