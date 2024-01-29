import React from "react";

import { SearchBar } from "src/components/SearchBar";
import { SignInButton } from "src/components/SignInButton";
import { Space } from "src/components/Space";
import { SupportButton } from "src/components/SupportButton";
import { SwitchLanguage } from "src/components/SwitchLanguage";
import { Title } from "src/components/Title";

import styles from "./styles.module.scss";

import { useTranslation } from "react-i18next";
import { HeaderTitle } from "../../components";

export function ProfilePage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string | undefined) => {
    console.log("sELECTED LANgUAGe", language);
    i18n.changeLanguage(language);
  };
  return (
    <div className={styles.profilePage}>
      <div className={styles.header}>
        <div className={styles.title}>
          <HeaderTitle />
        </div>
        <div className={styles.button}>
          <SupportButton />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.content}>
          <div></div>
        </div>
        <div className={styles.image}></div>
      </div>
    </div>
  );
}
