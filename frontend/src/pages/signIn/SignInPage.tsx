import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { AuthorizationForm } from "src/components/AuthorizationForm";
import { HeaderTitle } from "src/components/HeaderTitle";
import { SwitchLanguage } from "../../components/SwitchLanguage/SwitchLanguage";

import styles from "./styles.module.scss";

export const SignInPage: React.FC = () => {
  const [switchForm, setSwitchForm] = useState<boolean>(true);
  const navigate = useNavigate(); // Для перенаправления на другую страницу
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.log("Is authenticated:", isAuthenticated);
  }, [isAuthenticated]); // Здесь мы передаем isAuthenticated в качестве зависимости

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleSignInSuccess = (token: string) => {
    setIsAuthenticated(true);
    localStorage.setItem("userToken", token);
    navigate("/");
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
          onSignInSuccess={handleSignInSuccess}
        />
        <SwitchLanguage changeLanguage={changeLanguage} />
      </div>
    </>
  );
};
