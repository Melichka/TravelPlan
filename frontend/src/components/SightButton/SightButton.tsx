import React from "react";

import { MenuButton } from "src/components/MenuButton";
import { SIGHT } from "./constants";

import "./styles.css";

export const SightButton = () => {
  return <MenuButton text={SIGHT} isLarge />;
};
