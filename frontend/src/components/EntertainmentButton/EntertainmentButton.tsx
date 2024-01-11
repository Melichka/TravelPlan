import React from "react";

import { ENTERTAINMENT } from "./constants";
import { MenuButton } from "src/components/MenuButton";

import "./styles.css";

export const EntertainmentButton = () => {
  return <MenuButton text={ENTERTAINMENT} />;
};
