import React from "react";

import { HeaderTitle } from "src/components/HeaderTitle";
import { LogIn } from "src/components/LogIn";

import styles from "./styles.module.scss";

export function SignInPage() {
  return (
    <div className={styles.SignInPage}>
      <div className={styles.image}>
        <div className={styles.title}>
          <HeaderTitle />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.switcher}></div>
        <div className="">
          <LogIn />
        </div>
      </div>
    </div>
  );
}
