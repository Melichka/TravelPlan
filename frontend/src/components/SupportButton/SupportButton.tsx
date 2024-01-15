import React from "react";

import { Button, Typography } from "@mui/material";

import { SUPPORT } from "./constants";

import styles from "./styles.module.scss";

export const SupportButton = () => {
  return (
    <Button>
      <Typography className={styles.textButtonStyle}>{SUPPORT}</Typography>
    </Button>
  );
};
