import React from "react";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";

import { SIGN_IN, SIGN_UP } from "./constants";

import styles from "./styles.module.scss";

type SwitcherProps = {
  isActiveSwitcher: boolean;
  onClick: (isSignIn: boolean) => void;
};

export const Switcher: React.FC<SwitcherProps> = ({
  isActiveSwitcher,
  onClick,
}) => {
  const [alignment, setAlignment] = React.useState(true);

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
        {SIGN_IN}
      </ToggleButton>
      <ToggleButton
        classes={{
          root: styles.tab,
          selected: styles.tabSelected,
        }}
        value={false}
      >
        {SIGN_UP}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
