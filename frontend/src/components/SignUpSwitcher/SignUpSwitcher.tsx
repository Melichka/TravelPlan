import React from "react";

import { NavigateButton } from "../NavigateButton";

import { SIGN_UP } from "./constants";

export const SignUpSwitcher = ({isActiveSwitcher, onClick}) => {
  return <NavigateButton text={SIGN_UP}  isSwitcher onClick={onClick}/>;
};
