import React from "react";

import { ENTERTAINMENT } from "./constants";
import { MenuButton } from "../MenuButton/MenuButton";

import "./styles.css";

export const EntertainmentButton = () => {
  return <MenuButton text={ENTERTAINMENT} />;
};
