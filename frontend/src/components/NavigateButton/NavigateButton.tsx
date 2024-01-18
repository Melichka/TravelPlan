import React from "react";

import { Button, Typography } from "@mui/material";

import { useTranslation, Trans } from "react-i18next";

import classNames from "classnames";

import styles from "./styles.module.scss";

type NavigateButtonProps = {
  text: string;
  isSwitcher?: boolean;
  isMain?: boolean;
};

export const NavigateButton: React.FC<NavigateButtonProps> = ({
  text,
  isSwitcher,
  isMain,
}) => {
  return (
    <Button
      className={classNames({
        [styles["switcher"]]: isSwitcher,
        [styles["default"]]: !isSwitcher && !isMain,
        [styles["main"]]: isMain,
      })}
      variant="outlined"
    >
      <Typography
        className={classNames({
          [styles["default-menu-button-text"]]: !isSwitcher,
          [styles["switcher-menu-button-text"]]: isSwitcher,
        })}
      >
        {text}
      </Typography>
    </Button>
  );
};
