import React from "react";

import { HOTEL } from "./constants";
import { MenuButton } from "src/components/MenuButton";

import "./styles.css";

export const HotelButton = () => {
  return <MenuButton text={HOTEL} />;
};
