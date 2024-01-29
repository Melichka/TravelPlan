import React from "react";

import { Typography } from "@mui/material";

import { HeaderTitle } from "src/components/HeaderTitle";
import { SupportButton } from "src/components/SupportButton";
import { SwitchLanguage } from "src/components/SwitchLanguage";

import styles from "./styles.module.scss";

import { useTranslation } from "react-i18next";

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
          <SwitchLanguage />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.photo}></div>
            <h1></h1>
          </div>
          <Typography className={styles.text}>
            {t("description.my-tags")}
          </Typography>
          <div className={styles.tag}></div>
          <Typography className={styles.text}>
            {t("description.my-favorite-place")}
          </Typography>
          <div className={styles.place}>
            <div className={styles.card}></div>
          </div>
        </div>
        <div className={styles.image}></div>
      </div>
    </div>
  );
}
