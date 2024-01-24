import React from "react";
import { useTranslation } from "react-i18next";

import { NavigateButton } from "../NavigateButton";

export const SignInSwitcher = ({ isActiveSwitcher, onClick }) => {
  const { t } = useTranslation();
  return (
    <NavigateButton
      text={t("SignUpButton")}
      isActiveSwitcher={isActiveSwitcher}
      onClick={onClick}
    />
  );
};
