import React from "react";

import { HeaderTitle } from "src/components/HeaderTitle";
import { LogIn } from "src/components/LogIn";

import { Password, SignInButton, SubmitButton } from "../../components";

import styles from "./styles.module.scss";
import { Typography } from "@mui/material";
import { VARIANTS } from "./constants";
import { SignInSwitcher } from "../../components/SignInSwitcher";
import { SignUpSwitcher } from "../../components/SignUpSwitcher";

export function SignInPage() {
  return (
    <div className={styles.signinPage}>
      <div className={styles.image}>
        <div className={styles.title}>
          <HeaderTitle />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.switcher}>
          <SignInSwitcher />
          <SignUpSwitcher />
        </div>
        <div className={styles.field}>
          <LogIn />
          <Password />
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
    </div>
  );
}
