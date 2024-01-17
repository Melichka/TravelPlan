import React from "react";

import { Button, Typography } from "@mui/material";

import { SUBMIT } from "./constants";

import styles from "./styles.module.scss";

export const SubmitButton = () => {
  return (
    <div className={styles.submit}>
      <Button>
        <Typography className={styles.text}>{SUBMIT}</Typography>
      </Button>
    </div>
  );
};
