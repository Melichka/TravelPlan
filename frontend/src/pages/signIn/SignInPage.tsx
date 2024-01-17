import React from "react";

import { HeaderTitle } from "src/components/HeaderTitle";
import { LogIn } from "src/components/LogIn";

import styles from "./styles.module.scss";
import { Password, SubmitButton } from "../../components";

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
      </div>
    </div>
  );
}
