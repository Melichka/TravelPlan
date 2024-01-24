import React from "react";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";

import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

type SwitcherProps = {
  isActiveSwitcher: boolean;
  onClick: (isSignIn: boolean) => void;
};

export const Switcher: React.FC<SwitcherProps> = ({
  isActiveSwitcher,
  onClick,
}) => {
  const [alignment, setAlignment] = React.useState(true);
  const { t } = useTranslation();

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: boolean
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      onClick(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      color="primary"
      className={styles.main}
      value={alignment}
      exclusive
      onChange={handleAlignment}
    >
      <ToggleButton
        classes={{
          root: styles.tab,
          selected: styles.tabSelected,
        }}
        value={true}
      >
        {t("SignInButton")}
      </ToggleButton>
      <ToggleButton
        classes={{
          root: styles.tab,
          selected: styles.tabSelected,
        }}
        value={false}
      >
        {t("SignUpButton")}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
