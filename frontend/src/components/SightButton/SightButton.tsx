import React from "react";

import { SIGHT } from "./constants";

import "./styles.css";
import { MenuButton } from "../MenuButton/MenuButton";

export const SightButton = () => {
  return <MenuButton text={SIGHT} isLarge></MenuButton>;
};
