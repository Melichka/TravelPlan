import React from "react";

import { Button, Typography } from "@mui/material";

import { SIGN_IN } from "./constants";

import styles from "./styles.module.scss";

export const SignInButton = () => {
  return (
    <Button className={styles.button} variant="outlined">
      <Typography className={styles['text-button']} variant="h3">
        {SIGN_IN}
      </Typography>
    </Button>
  );
};
