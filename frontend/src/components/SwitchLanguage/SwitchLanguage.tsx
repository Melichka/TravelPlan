import React from "react";

import { Button, MenuItem, Typography } from "@mui/material";

import { useTranslation, Trans } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  ru: { nativeName: "Russian" },
};

export const SwitchLanguage = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          style={{
            fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
          }}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  );
};
