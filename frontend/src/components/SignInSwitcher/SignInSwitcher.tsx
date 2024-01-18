import React from "react";

import { NavigateButton } from "../NavigateButton";

import { SIGN_IN } from "./constants";

export const SignInSwitcher = ({isActiveSwitcher, onClick}) => {
  return <NavigateButton text={SIGN_IN} isActiveSwitcher={isActiveSwitcher} onClick={onClick}/>;
};
