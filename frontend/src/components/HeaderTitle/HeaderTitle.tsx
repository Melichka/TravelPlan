import React from "react";

import { BOTTOM_TITLE, UPPER_TITLE } from "./constants";

import styles from "./styles.module.scss";

export const HeaderTitle = () => {
  return (
    <div className={styles.header}>
      <h2 className={styles.upper}> {UPPER_TITLE} </h2>
      <h2 className={styles.bottom}> {BOTTOM_TITLE} </h2>
    </div>
  );
};
