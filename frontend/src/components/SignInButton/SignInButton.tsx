import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { NavigateButton } from "src/components/NavigateButton";

import styles from "./styles.module.scss";

export const SignInButton = ({ onClick }) => { // Принимаем onClick как аргумент
  const { t } = useTranslation();
  return (
    <Link to="/sign-in" className={styles.button}>
      <NavigateButton text={t("SignInButton")} isMain onClick={onClick} /> {/* Передаем onClick */}
    </Link>
  );
};
