import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./SearchPageStyles.js";
import "../fonts/Righteous-Regular.ttf";
import "./SearchPage.css";

function SearchPage() {
  const classes = useStyles();

  return (
    <div className="search-page">
      <div className="search-page-buttons">
        <Button variant="outlined" className="button-style">SIGN IN</Button>
        <Button className="button-style">SUPPORT</Button>
      </div>
      <div id="title">
        <h1> Oompa Loompas </h1>
      </div>
      <div>
        <img src="./Limon.svg" alt="Limon"></img>
      </div>

      <div className="search-bar">
        <TextField
          id="input-text-field"
          placeholder="Введите страну, город или место..."
          inputProps
          className={classes.textField}
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
  );
}

export default SearchPage;
