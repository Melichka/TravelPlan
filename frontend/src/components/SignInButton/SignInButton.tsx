import React from "react";

import { Link } from "react-router-dom";

import { NavigateButton } from "../NavigateButton";

import { SIGN_IN } from "./constants";

import styles from "./styles.module.scss"

export const SignInButton = () => {
  return (
    <Link to="/sign-in" className={styles.button} >
      <NavigateButton text={SIGN_IN} isMain />
    </Link>
  );
};
