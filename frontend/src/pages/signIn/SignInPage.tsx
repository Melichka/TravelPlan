import React, { useState } from "react";

import { AuthorizationForm } from "src/components/AuthorizationForm";
import { HeaderTitle } from "src/components/HeaderTitle";
import { LoginForm } from "src/components/LoginForm";
import { RegisterForm } from "src/components/RegisterForm";

import styles from "./styles.module.scss";

export const SignInPage: React.FC = () => {
  const [switchForm, setSwitchForm] = useState<boolean>(true);

  return (
    <>
      <div className={styles.signinPage}>
        <div className={styles.image}>
          <div className={styles.title}>
            <HeaderTitle />
          </div>
        </div>
        <AuthorizationForm
          formSwitch={switchForm}
          setFormSwitch={setSwitchForm}
        />
      </div>
    </>
  );
};
