import React from "react";

import { MenuButton } from "src/components/MenuButton";
import { ENTERTAINMENT } from "./constants";
import { useTranslation } from "react-i18next";

export const EntertainmentButton = () => {
  const { t } = useTranslation();
  return <MenuButton text={t("EntertainmentButton")} />;
};
