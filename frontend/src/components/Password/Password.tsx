import React from "react";

import { InputField } from "src/components/InputField";
import { PASSWORD } from "./constants";

import styles from"./styles.module.scss";

export const Password = () => {
  return <InputField placeholder={PASSWORD} isPassword></InputField>;
};
