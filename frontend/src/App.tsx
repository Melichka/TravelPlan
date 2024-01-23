import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

import { CityPage } from "src/pages/city";
import { SearchPage } from "src/pages/search";
import { SignInPage } from "src/pages/signIn";

import { useTranslation, Trans } from "react-i18next";

import "./index.scss";

import "./i18n";

function App() {
  const theme = createTheme({
    components: {
      MuiToggleButton: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              color: "#a61700",
              backgroundColor: "#FFA040",
              boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "30px",
            },
          },
        },
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          grouped: {
            "&:not(:last-of-type)": {
              borderRadius: 30,
            },
            "&:not(:first-of-type)": {
              borderRadius: 30,
            },
          },
        },
      },
    },
  });

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
