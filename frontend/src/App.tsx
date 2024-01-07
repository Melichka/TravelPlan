import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

import { SearchPage } from "./pages/SearchPage";

import "./index.css";
import { CityPage } from "./pages/CityPage";

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
              <Route path="*" element={<h3>404</h3>} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
