import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import { NavigateButton } from "src/components/NavigateButton";

import styles from "./styles.module.scss";

export const SignOutButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSignOut = () => {
    console.log("Выход пользователя"); // Для отладки
    localStorage.removeItem("userToken");
    navigate("/");
  };

  return (
    <NavigateButton text={t("SignOutButton")} isMain onClick={handleSignOut} />
  );
};
