import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

import { CityPage } from "src/pages/citypage";
import { SearchPage } from "src/pages/searchpage";

import "./index.css";

import "./i18n";

function App() {
  const theme = createTheme({});

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={SearchPage} />
            <Route path="/city" Component={CityPage} />
            <Route path="*" element={<h3>404</h3>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
