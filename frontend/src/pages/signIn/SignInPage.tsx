import React from "react";

import { HeaderTitle } from "src/components/HeaderTitle";
import { LogIn } from "src/components/LogIn";

import { Password, SubmitButton } from "../../components";

import styles from "./styles.module.scss";
import { Typography } from "@mui/material";
import { VARIANTS } from "./constants";

export function SignInPage() {
  return (
    <div className={styles.signinPage}>
      <div className={styles.image}>
        <div className={styles.title}>
          <HeaderTitle />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.switcher}></div>
        <div className={styles.field}>
          <LogIn />
          <Password />
        </div>
        <SubmitButton />
        <Typography className={styles.text}>{VARIANTS}</Typography>
        <div className={styles.altenative}>

        </div>
      </div>
    </div>
  );
}
