import React from "react";

import { HOTEL } from "./constants";
import { MenuButton } from "../MenuButton/MenuButton";

import "./styles.css";

export const HotelButton = () => {
  return <MenuButton text={HOTEL} />;
};
