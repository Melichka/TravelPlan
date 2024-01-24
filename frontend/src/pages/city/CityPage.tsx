import React from "react";

import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";

import { EntertainmentButton } from "src/components/EntertainmentButton";
import { HeaderTitle } from "src/components/HeaderTitle";
import { HotelButton } from "src/components/HotelButton";
import { SightButton } from "src/components/SightButton";
import { SignInButton } from "src/components/SignInButton";
import { SwitchLanguage } from "src/components/SwitchLanguage";
import { SupportButton } from "src/components/SupportButton";

import { FavoriteBorderTwoToneIconStyles } from "src/pages/city/utils";

import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

export const CityPage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className={styles["city-page"]}>
      <div className={styles["city-page-header"]}>
        <div className={styles["city-page-title"]}>
          <HeaderTitle />
        </div>
        <div className={styles["city-page-buttons"]}>
          <SwitchLanguage />
          <SignInButton />
          <SupportButton />
        </div>
      </div>
      <div className={styles["city-page-main"]}>
        <div className={styles["city-page-main-card"]}>
          <div className={styles["city-page-main-card-header"]}>
            <div className={styles["city-page-main-card-header-name"]}>
              <h3></h3>
            </div>
            <FavoriteBorderTwoToneIcon sx={FavoriteBorderTwoToneIconStyles()} />
          </div>
          <div className={styles["city-page-main-card-image"]}></div>
        </div>
        <div className={styles["city-page-description"]}>
          <div className={styles["city-page-description-buttons"]}>
            <div className={styles["city-page-description-sight"]}>
              <SightButton />
            </div>
            <div className={styles["city-page-description-hotel"]}>
              <HotelButton />
            </div>
            <div className={styles["city-page-description-entertainment"]}>
              <EntertainmentButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
