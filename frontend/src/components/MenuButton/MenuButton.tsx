import React from "react";

import { Button, Typography } from "@mui/material";

import { useTranslation, Trans } from 'react-i18next';

import classNames from "classnames";

import styles from  "./styles.module.scss";

type MenuButtonProps = {
  text: string;
  isLarge?: boolean;
};

export const MenuButton: React.FC<MenuButtonProps> = ({ text, isLarge }) => {
  return (
    <Button
      className={classNames({
        large: isLarge,
        default: !isLarge,
      })}
    >
      <Typography
        className={classNames({
          [styles["default-menu-button-text"]]: !isLarge,
          [styles["large-menu-button-text"]]: isLarge,
        })}
        variant="h3"
      >
        {" "}
        <Trans i18nKey="description.part1">{text}</Trans>
      </Typography>
    </Button>
  );
};
