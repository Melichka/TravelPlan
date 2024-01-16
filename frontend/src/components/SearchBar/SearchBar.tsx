import React from "react";

import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { SearchBarStyles, SearchIconStyles } from "./utils";
import { TEXT_INTO_SEARCH_BAR } from "./constants";

import styles from "./styles.module.scss";

export const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <TextField
        placeholder={TEXT_INTO_SEARCH_BAR}
        className={styles.textField}
        variant="outlined"
        type="text"
        fullWidth
        sx={SearchBarStyles()}
        InputProps={{
          startAdornment: (
            <Button>
              <SearchIcon
                sx={SearchIconStyles()}
              />
            </Button>
          ),
        }}
      />
    </div>
  );
};
