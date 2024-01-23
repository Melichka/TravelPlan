import React, { useState } from "react";
import { PropsWithChildren } from "react";

import { Typography } from "@mui/material";

import { VARIANTS } from "src/pages/signIn/constants";

import { LoginForm } from "../LoginForm";
import { SubmitButton } from "../SubmitButton";
import { Switcher } from "../Switcher";
import { RegisterForm } from "../RegisterForm";

import styles from "./styles.module.scss";

type Props = PropsWithChildren<{
  formSwitch: boolean;
  setFormSwitch: (value: boolean) => void;
}>;

export const AuthorizationForm: React.FC<Props> = ({
  children,
  formSwitch,
  setFormSwitch,
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
        {currentTab ? <LoginForm /> : <RegisterForm />}
        {children}
      </div>
      <SubmitButton />
      <div className={styles.bottom}>
        <Typography className={styles.text}>{VARIANTS}</Typography>
        <div className={styles.alternative}>
          <div className={styles.instagram}> </div>
          <div className={styles.google}></div>
          <div className={styles.vk}></div>
        </div>
      </div>
    </div>
  );
};
