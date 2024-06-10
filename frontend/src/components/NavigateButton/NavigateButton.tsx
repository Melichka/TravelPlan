import React from "react";
import { Button, Typography } from "@mui/material";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

type NavigateButtonProps = {
  text: string;
  isActiveSwitcher?: boolean;
  isSwitcher?: boolean;
  isMain?: boolean;
  onClick?: () => void; // Явно указываем, что onClick допустим
} & React.ButtonHTMLAttributes<HTMLButtonElement>; // Добавляем стандартные атрибуты кнопки


export const NavigateButton: React.FC<NavigateButtonProps> = ({
  text,
  isActiveSwitcher,
  isSwitcher,
  isMain,
  onClick,
}) => {
  const { t } = useTranslation();
  const isDefault = !isSwitcher && !isMain && !isActiveSwitcher;
  return (
    <Button
      className={classNames({
        [styles["activSwitcher"]]: isActiveSwitcher,
        [styles["switcher"]]: isSwitcher,
        [styles["default"]]: isDefault,
        [styles["main"]]: isMain,
      })}
      variant="outlined"
      onClick={onClick} // Убедитесь, что onClick передается в компонент Button
    >
      <Typography
        className={classNames({
          [styles["default-menu-button-text"]]:
            !isSwitcher && !isActiveSwitcher,
          [styles["switcher-menu-button-text"]]: isSwitcher || isActiveSwitcher,
        })}
      >
        {t(text)}
      </Typography>
    </Button>
  );
};
