import React from "react";

import { BOTTOM_TITLE, UPPER_TITLE } from "./constants";

import "./styles.css";

export const HeaderTitle = () => {
  return (
    <div className="header-title">
      <h2 className="upper-title">  {UPPER_TITLE} </h2>
      <h2 className="bottom-title"> {BOTTOM_TITLE} </h2>
    </div>
  );
};
