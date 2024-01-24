import React from "react";
import { useTranslation } from "react-i18next";

import { MenuButton } from "src/components/MenuButton";

export const HotelButton = () => {
  const { t } = useTranslation();
  return <MenuButton text={t("HotelButton")} />;
};
