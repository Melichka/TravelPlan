import React from "react";

import { SearchBar } from "src/components/SearchBar";
import { SignInButton } from "src/components/SignInButton";
import { Space } from "src/components/Space";
import { SupportButton } from "src/components/SupportButton";
import { Title } from "src/components/Title";

import styles from "./styles.module.scss";

export function SearchPage() {
  return (
    <div className={styles.searchPage}>
      <div className={styles.buttons}>
        <SignInButton />
        <SupportButton />
      </div>
      <div className={styles.main}>
        <div className={styles.assets}>
          <div className={styles.image} />
          <Title />
        </div>
        <SearchBar />
      </div>
      <Space />
    </div>
  );
}
