import React from "react";

import { NavigateButton } from "../NavigateButton";

import { SIGN_IN } from "./constants";

export const SignInButton = () => {
  return <NavigateButton text={SIGN_IN} isMain />;
};
