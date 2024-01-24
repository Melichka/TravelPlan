import React from "react";
import { useTranslation } from "react-i18next";

import { InputField } from "src/components/InputField";

export const Password = () => {
  const { t } = useTranslation();
  return <InputField placeholder={t("Password")} isPassword></InputField>;
};
