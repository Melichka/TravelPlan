import React from "react";

import { LOGIN } from "./constants";
import { InputField } from "../InputField";
import { useTranslation } from "react-i18next";

export const LogIn = () => {
  const {t}= useTranslation()
  return <InputField placeholder={t("Login")} isLogin />;
};
