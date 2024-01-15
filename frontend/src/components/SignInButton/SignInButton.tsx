import React from "react";

import { Button, Typography } from "@mui/material";

import { SIGN_IN } from "./constants";

import "./styles.scss";

export const SignInButton = () => {
  return (
    <Button className="button" variant="outlined">
      <Typography className="text-button" variant="h3">
        {SIGN_IN}
      </Typography>
    </Button>
  );
};
