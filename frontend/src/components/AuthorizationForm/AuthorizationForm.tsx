import React, { useState } from "react";
import { PropsWithChildren } from "react";
import { Typography } from "@mui/material";
import { Switcher } from "../Switcher";
import { RegisterForm } from "../RegisterForm";
import { LoginForm } from "../LoginForm";
import styles from "./styles.module.scss";
import { t } from "i18next";

type Props = PropsWithChildren<{
  formSwitch: boolean;
  setFormSwitch: (value: boolean) => void;
  onSignInSuccess: (token: string) => void;
}>;

export const AuthorizationForm: React.FC<Props> = ({
  children,
  formSwitch,
  setFormSwitch,
  onSignInSuccess,
}) => {
  const [currentTab, setCurrentTab] = useState(true);

  const handleSwitch = (isSignIn: boolean) => {
    setFormSwitch(isSignIn);
    setCurrentTab(isSignIn);
  };

  return (
    <div className={styles.main}>
      <div className={styles.switcher}>
        <Switcher isActiveSwitcher={currentTab} onClick={handleSwitch} />
      </div>
      <div className={styles.field}>
        {currentTab ? (
          <LoginForm onSignInSuccess={onSignInSuccess} />
        ) : (
          <RegisterForm />
        )}
        {children}
      </div>
      <div className={styles.bottom}>
        <Typography className={styles.text}>
          {t("description.sign-in")}
        </Typography>
        <div className={styles.alternative}>
          <div className={styles.instagram}> </div>
          <div className={styles.google}></div>
          <div className={styles.vk}></div>
        </div>
      </div>
    </div>
  );
};
