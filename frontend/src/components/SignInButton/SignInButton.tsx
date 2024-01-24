import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { NavigateButton } from "../NavigateButton";

import { SIGN_IN } from "./constants";

import styles from "./styles.module.scss";

export const SignInButton = () => {
  const { t } = useTranslation();
  return (
    <Link to="/sign-in" className={styles.button}>
      <NavigateButton text={t("SignInButton")} isMain />
    </Link>
  );
};
