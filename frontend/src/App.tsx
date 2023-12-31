import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { ThemeProvider, createTheme } from "@mui/material";

import { SearchPage } from "./pages/SearchPage";

import "./index.css"

function App() {
  const theme = createTheme({

  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={SearchPage} />
              <Route path="*" element={<h3>404</h3>} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  )
};


export default App;
