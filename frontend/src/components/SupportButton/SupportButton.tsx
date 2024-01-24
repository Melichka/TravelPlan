import React from "react";
import { useTranslation } from "react-i18next";

import { NavigateButton } from "../NavigateButton";

export const SupportButton = () => {
  const { t } = useTranslation();
  return <NavigateButton text={t("SupportButton")} />;
};
