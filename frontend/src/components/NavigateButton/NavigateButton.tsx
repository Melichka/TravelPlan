import React from "react";

import { Button, Typography } from "@mui/material";

import { useTranslation, Trans } from "react-i18next";

import classNames from "classnames";

import styles from "./styles.module.scss";

type NavigateButtonProps = {
  text: string;
  isActiveSwitcher?: boolean;
  isSwitcher?: boolean;
  isMain?: boolean;
  onClick?: () => void;
};

export const NavigateButton: React.FC<NavigateButtonProps> = ({
  text,
  isActiveSwitcher,
  isSwitcher,
  isMain,
  onClick
}) => {
  return (
    <Button
      className={classNames({
        [styles["activSwitcher"]]: isActiveSwitcher,
        [styles["switcher"]]: isSwitcher,
        [styles["default"]]: !isSwitcher && !isMain && !isActiveSwitcher,
        [styles["main"]]: isMain,
      })}
      variant="outlined"
      onClick={onClick}
    >
      <Typography
        className={classNames({
          [styles["default-menu-button-text"]]: !isSwitcher && !isActiveSwitcher && !isMain,
          [styles["switcher-menu-button-text"]]: isSwitcher || isActiveSwitcher,
        })}
      >
        {text}
      </Typography>
    </Button>
  );
};
