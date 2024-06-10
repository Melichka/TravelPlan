import React from "react";
import { InputField } from "../InputField";
import { useTranslation } from "react-i18next";

interface LogInProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export const LogIn: React.FC<LogInProps> = ({ setEmail }) => {
  const { t } = useTranslation();

  return (
    <InputField
      placeholder={t("Login")}
      isLogin
      onChange={(e) => setEmail(e.target.value)}
    />
  );
};
