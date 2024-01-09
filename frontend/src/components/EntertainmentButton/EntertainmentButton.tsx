import React from "react";

import { Button, Typography } from "@mui/material";

import { ENTERTAINMENT } from "./constants";

import "./styles.css";

export const EntertainmentButton = () => {
  return (
    <Button className="button-style">
      <Typography className="text-button-style" variant="h3">
        {ENTERTAINMENT}
      </Typography>
    </Button>
  );
};
