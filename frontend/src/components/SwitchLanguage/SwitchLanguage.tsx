import React from "react";
import { useTranslation } from "react-i18next";

import { Select, MenuItem } from "@mui/material";

import styles from "./styles.module.scss"

const lngs = {
  en: { flag: "public/assets/flags/usa.png" },
  ru: { flag: "public/assets/flags/russia.jpg" },
};

export const SwitchLanguage = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div>
      <Select
        value={i18n.language}
        onChange={handleChangeLanguage}
        label="Select Language"
      >
        {Object.keys(lngs).map((lng) => (
          <MenuItem key={lng} value={lng}>
            <img
              src={lngs[lng].flag}
              alt={`${lng} flag`}
              className={styles.image}
            />
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
