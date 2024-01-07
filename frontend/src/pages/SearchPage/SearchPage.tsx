import React from "react";

import { SearchBar } from "../../components/SearchBar";
import { SignInButton } from "../../components/SignInButton";
import { Space } from "../../components/Space";
import { SupportButton } from "../../components/SupportButton";
import { Title } from "../../components/Title";

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
