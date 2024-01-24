import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { AuthorizationForm } from "src/components/AuthorizationForm";
import { HeaderTitle } from "src/components/HeaderTitle";
import { LoginForm } from "src/components/LoginForm";
import { RegisterForm } from "src/components/RegisterForm";

import styles from "./styles.module.scss";
import { SwitchLanguage } from "../../components/SwitchLanguage/SwitchLanguage";

export const SignInPage: React.FC = () => {
  const [switchForm, setSwitchForm] = useState<boolean>(true);

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
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
            <SwitchLanguage />
      </div>
    </>
  );
};
