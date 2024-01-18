import React from "react";

import { NavigateButton } from "../NavigateButton";

import { SIGN_UP } from "./constants";

export const SignUpSwitcher = () => {
  return <NavigateButton text={SIGN_UP}  isSwitcher/>;
};
