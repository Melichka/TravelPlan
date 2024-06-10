import React from "react";
import { InputField } from "../InputField";
import { useTranslation } from "react-i18next";

interface PasswordProps {
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export const Password: React.FC<PasswordProps> = ({ setPassword }) => {
  const { t } = useTranslation();

  return <InputField placeholder={t("Password")} isPassword onChange={(e) => setPassword(e.target.value)} />;
};
