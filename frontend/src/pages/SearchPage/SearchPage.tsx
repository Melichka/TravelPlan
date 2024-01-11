import React from "react";

import { SearchBar } from "src/components/SearchBar";
import { SignInButton } from "src/components/SignInButton";
import { Space } from "src/components/Space";
import { SupportButton } from "src/components/SupportButton";
import { Title } from "src/components/Title";

import "./styles.css";

export function SearchPage() {
  return (
    <div className="search-page">
      <div className="search-page-buttons">
        <SignInButton />
        <SupportButton />
      </div>
      <div className="search-page-main">
        <div className="search-page-assets">
          <div className="search-page-image" />
          <Title />
        </div>
        <SearchBar />
      </div>
      <Space />
    </div>
  );
}
