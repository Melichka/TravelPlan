import React from "react";

import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { SearchBarStyles } from "./utils";
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
        sx={SearchBarStyles()}
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
