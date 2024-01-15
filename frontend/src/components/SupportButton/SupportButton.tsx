import React from "react";

import { Button, Typography } from "@mui/material";

import { SUPPORT } from "./constants";

import "./styles.scss";

export const SupportButton = () => {
  return (
    <Button>
      <Typography className="text-button-style">{SUPPORT}</Typography>
    </Button>
  );
};
