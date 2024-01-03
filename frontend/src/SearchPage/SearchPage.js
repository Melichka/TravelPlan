import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./SearchPageStyles.js";
import "./SearchPage.css";
import { SIGN_IN, SUPPORT } from "./Constants.js";

function SearchPage() {
  const classes = useStyles();

  return (
    <div className="search-page">
      <div className="search-page-buttons">
        <Button
          className={`button-style ${classes.buttonStyle}`}
          variant="outlined"
          id="main-button-style"
        >
          <Typography className="text-button-style">{SIGN_IN}</Typography>
        </Button>
        <Button className="button-style">
          <Typography className="text-button-style">{SUPPORT}</Typography>
        </Button>
      </div>
      <div className="search-page-main">
        <div className="search-page-assets">
          <div className="search-page-image"></div>
          <div className="title">
            <h1 className="upper-title"> Oompa </h1>
            <h1 className="bottom-title">Loompas</h1>
          </div>
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
      <div className="space"></div>
    </div>
  );
}

export default SearchPage;
