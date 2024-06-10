import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Typography } from "@mui/material";
import styles from "./styles.module.scss";

interface SubmitButtonProps {
  onClick: () => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.submit}>
      <Button onClick={onClick}>
        <Typography className={styles.text}>{t("SubmitButton")}</Typography>
      </Button>
    </div>
  );
};
