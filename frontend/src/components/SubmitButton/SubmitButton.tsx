import React from "react";
import { useTranslation } from "react-i18next";

import { Button, Typography } from "@mui/material";

import styles from "./styles.module.scss";

export const SubmitButton = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.submit}>
      <Button>
        <Typography className={styles.text}>{t("SubmitButton")}</Typography>
      </Button>
    </div>
  );
};
