import React from "react";

import { Button, Typography } from "@mui/material";

import { SUBMIT } from "./constants";

import "./styles.css";

export const SubmitButton = () => {
  return (
    <div className="submit-button">
      <Button>
        <Typography>{SUBMIT}</Typography>
      </Button>
    </div>
  );
};
