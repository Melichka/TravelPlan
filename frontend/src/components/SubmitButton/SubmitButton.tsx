import React from "react";

import { Button, Typography } from "@mui/material";

import { SUBMIT } from "./constants";

import "./styles.scss";

export const SubmitButton = () => {
  return (
    <div className="submit-button">
      <Button>
        <Typography>{SUBMIT}</Typography>
      </Button>
    </div>
  );
};
