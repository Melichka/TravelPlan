import React from "react";

import { BOTTOM_TITLE, UPPER_TITLE } from "./constants";

import "./styles.css";

export const Title = () => {
  return (
    <div className="title">
      <h1 className="upper-title"> {UPPER_TITLE} </h1>
      <h1 className="bottom-title"> {BOTTOM_TITLE} </h1>
    </div>
  );
};
