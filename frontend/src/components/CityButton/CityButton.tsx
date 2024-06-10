import React from "react";

import { MenuButton } from "src/components/MenuButton";
import { useTranslation } from "react-i18next";

export const CityButton = () => {
  const { t } = useTranslation();
  return <MenuButton text={t("CityButton")} />;
};
