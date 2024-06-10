import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchBarStyles, SearchIconStyles } from "./utils";
import { TEXT_INTO_SEARCH_BAR } from "./constants";
import styles from "./styles.module.scss";

export const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleIconClick = () => {
    // Вызываем функцию поиска, передавая текущий запрос
    onSearch(searchQuery);
  };

  return (
    <div className={styles.searchBar}>
      <TextField
        placeholder={TEXT_INTO_SEARCH_BAR}
        className={styles.textField}
        variant="outlined"
        type="text"
        fullWidth
        value={searchQuery}
        onChange={handleInputChange}
        sx={SearchBarStyles()}
        InputProps={{
          startAdornment: (
            <Button onClick={handleIconClick}>
              <SearchIcon sx={SearchIconStyles()} />
            </Button>
          ),
        }}
      />
    </div>
  );
};
