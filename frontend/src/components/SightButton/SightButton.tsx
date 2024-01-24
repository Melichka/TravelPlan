import React from "react";
import { useTranslation } from "react-i18next";

import { MenuButton } from "src/components/MenuButton";

export const SightButton = () => {
  const { t} = useTranslation();
  return <MenuButton text={t("SightButton")} isLarge />;
};
