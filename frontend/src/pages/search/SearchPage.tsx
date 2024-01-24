import React from "react";

import { SearchBar } from "src/components/SearchBar";
import { SignInButton } from "src/components/SignInButton";
import { Space } from "src/components/Space";
import { SupportButton } from "src/components/SupportButton";
import { SwitchLanguage } from "src/components/SwitchLanguage";
import { Title } from "src/components/Title";

import styles from "./styles.module.scss";

import { useTranslation } from "react-i18next";

export function SearchPage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string | undefined) => {
    console.log('sELECTED LANgUAGe', language)
    i18n.changeLanguage(language);
  };
  return (
    <div className={styles.searchPage}>
      <div className={styles.buttons}>
        <SignInButton />
        <SupportButton />
        <SwitchLanguage/>
      </div>
      <div className={styles.main}>
        <div className={styles.assets}>
          <div className={styles.image} />
          <Title />
        </div>
        <SearchBar />
      </div>
      <Space />
    </div>
  );
}
