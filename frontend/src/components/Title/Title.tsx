import React from "react";

import { useHomeNavigation } from "../../hooks/useHomeNavigation";

import { BOTTOM_TITLE, UPPER_TITLE } from "./constants";

import styles from "./styles.module.scss";

export const Title = () => {
  const onHomeNavigation = useHomeNavigation();

  return (
    <div className={styles.title}>
      <h1 className={styles.upper}> {UPPER_TITLE} </h1>
      <h1 className={styles.bottom}> {BOTTOM_TITLE} </h1>
    </div>
  );
};
