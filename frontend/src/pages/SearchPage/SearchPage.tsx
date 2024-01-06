import React from "react";

import { Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { SignInButton } from "../../components/SignInButton";
import { SupportButton } from "../../components/SupportButton";
import { Title } from "../../components/Title";

import "./SearchPage.css";

export function SearchPage() {
  return (
    <div className="search-page">
      <div className="search-page-buttons">
        <SignInButton />
        <SupportButton />
      </div>

      <div className="search-page-main">
        <div className="search-page-assets">
          <div className="search-page-image" />
          <Title />
        </div>
        <div className="search-bar">
          <TextField
            id="input-text-field"
            placeholder="Введите страну, город или место..."
            className="text-field"
            variant="outlined"
            type="text"
            fullWidth
            InputProps={{
              startAdornment: (
                <Button>
                  <SearchIcon />
                </Button>
              ),
            }}
          />
        </div>
      </div>

      <div className="space"></div>
    </div>
  );
}
