import React from "react";

import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { TEXT_INTO_SEARCH_BAR } from "./constants";

import "./styles.css";

export const SearchBar = () => {
  return (
    <div className="search-bar">
      <TextField
        placeholder={TEXT_INTO_SEARCH_BAR}
        className="text-field"
        variant="outlined"
        type="text"
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 50, // Установка радиуса в 50
            borderColor: "#A61700", // Установка цвета рамки
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#A61700", // Также установка цвета рамки для активного состояния
          },
        }}
        InputProps={{
          startAdornment: (
            <Button>
              <SearchIcon
                sx={{
                  color: "black",
                }}
              />
            </Button>
          ),
        }}
      />
    </div>
  );
};