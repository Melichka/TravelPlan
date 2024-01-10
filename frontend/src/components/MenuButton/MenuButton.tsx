import React from "react";

import { Button, Typography } from "@mui/material";

import classNames from "classnames";

import "./styles.css";

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
          "default-menu-button-text": !isLarge,
          "large-menu-button-text": isLarge,
        })}
        variant="h3"
      >
        {text}
      </Typography>
    </Button>
  );
};
